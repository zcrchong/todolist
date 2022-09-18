import './App.css';
import Header from './components/Header'
import List from "./components/List";
import Footer from "./components/Footer";

import React, {Component} from 'react';

class App extends Component {
    //初始化状态
    state = {
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:false},
            {id:'003',name:'打豆豆',done:true}
        ]
    }
    addTodo = (todoObj)=> {
        let newTodos = []
        newTodos = [todoObj, ...this.state.todos]
        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state
        return (
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo = {this.addTodo}/>
                        <List todos={todos}/>
                        <Footer/>
                    </div>
                </div>
        );
    }
}

export default App;
