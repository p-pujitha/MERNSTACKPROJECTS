import React, { Component } from 'react'
import axios from 'axios';

const context = React.createContext()

const reducer = (prevState, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { todos: prevState.todos.map(t => { if (t._id === action.payload) { t.complete = !t.complete }; return t; }) }

        case "REMOVE":
            return { todos: prevState.todos.filter(todo => todo._id !== action.payload) }

        case "ADD":
            return { todos: [...prevState.todos, action.payload]}
        default: return prevState;
    }
}

export class Provider extends Component {

    state = {
        todos: [
            // {
            //     id: 1,
            //     title: "check emails",
            //     complete: true
            // },
            // {
            //     id: 2,
            //     title: "check voice",
            //     complete: false
            // },
            // {
            //     id: 3,
            //     title: "check report",
            //     complete: false
            // }
        ],

        dispatch: (action) => this.setState(prevState => reducer(prevState, action))
    }

    componentDidMount(){
        axios.get('/todos')
        .then(res => this.setState({
            todos : res.data
        }))
    }
    render() {
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export const Consumer = context.Consumer
