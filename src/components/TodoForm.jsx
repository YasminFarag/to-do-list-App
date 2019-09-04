import React, { Component } from 'react'
import Result from './Result';


class TodoForm extends Component {
    state={
        text: '',
        todos: []
    }

    deleteButton=(deleteTodo)=>{
        let newTodo= this.state.todos.filter(element=>{
            return element !== deleteTodo
        });


        this.setState({
            todos:newTodo,
        
        })

    }

    handleChange=(event) =>{
        let newText= event.target.value
        this.setState({text:newText })
        console.log('text', newText);

    }

    handleSubmit=(event) => {
        event.preventDefault()
        this.setState({
            todos: [...this.state.todos, this.state.text],
            text: ''
       
        })

        
    }

    

    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>

                    <input type="text" value={this.state.text}placeholder="type your list" onChange={this.handleChange}></input>
                    <button className="waves-effect waves-light btn">Add</button>
                    </form>

                   <Result todo={this.state.todos} input={this.state.text} deleteButton={this.deleteButton} />                                
            </div>
            
        )
    
        }
    }
export default TodoForm
