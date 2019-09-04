import React, { Component } from 'react'


 class Result extends Component {
    render() {
        let listItems =this.props.todo.map((list,index)=>{
            return(
            <li className="list-group-item"key={index}>{list}<button className="waves-effect waves-light btn newbtn"  onClick={()=>this.props.deleteButton(list)}>undo</button></li>
            )
            });
        return (
            <main className="container" >
                {/* {this.props.input && <p>typing:{this.props.input}</p>} */}
                <div className="todo-area">
                
              <ul className="list-group  list" >{listItems}</ul>
              {/* <button onClick={()=>this.props.deleteButton}>x</button>   */}  
              </div>
            </main>
        )
    }
}

export default Result
