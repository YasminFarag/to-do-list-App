import React, { Component } from 'react'
import Result from './Result';


class TodoForm extends Component {
    
    constructor(props){
        super(props)
        let initData = JSON.parse (localStorage.getItem('keep old data'))


        this.state={
            text: '',
            todos: initData
        }
    }

    deleteButton=(deleteTodo)=>{
        let newButton = this.state.todos
        newButton.splice(deleteTodo,1)

        this.setState({
            todos:newButton,
        
        } , ()=> {
            localStorage.setItem('keep old data', JSON.stringify(this.state.todos))
        })

        /* let newTodo= this.state.todos.filter(element=>{
            return element !== deleteTodo  */
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
       
        },()=> {
            let keepData = JSON.stringify(this.state.todos);
            localStorage.setItem('keep old data', keepData)
        } )
   
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
