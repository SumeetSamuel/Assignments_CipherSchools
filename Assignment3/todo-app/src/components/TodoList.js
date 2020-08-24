import React, { Component } from 'react'
import './todoList.css';

class TodoList extends Component {
    state={
        userInput:'',
        list: []
    }

    changeUserInput(input){
        this.setState({
            userInput: input
        })
    }

    addToList(input){
         let listArray= this.state.list;
        listArray.push(input);
        this.setState({
            list: listArray,
            userInput:""
        })

    }

    delete=(event)=>{
        const id= event.target.id;
        const itemlist=this.state.list;
        itemlist.splice(id,1);

        this.setState({
            list:itemlist
        })
    }

    render() {
        return (
        <div className="taskDetail">
            <input type="text" placeholder="enter task"  value={this.state.userInput} onChange={(e)=> this.changeUserInput(e.target.value)}/>
            <button onClick={()=> this.addToList(this.state.userInput)}>Submit</button>
            <div>
                   {this.state.list.map((val,index)=> <div className="taskbar" key={index}>{val}<button onClick={this.delete}>Delete</button></div> )}
            </div>
        </div>
        )
    }
}

export default TodoList
