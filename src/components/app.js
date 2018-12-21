import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, { Component } from 'react';
import List from './list';
import AddItem from './add_item';
import dummyList from '../data/to_do_list';
import {randomString} from '../helpers';


console.log('randome string:')
console.log(randomString(2));
console.log(randomString(5));
console.log(randomString(9))
console.log('randome string end')



class App extends Component {
    state = {
        list: []
    }

    componentDidMount(){
        this.getListData();
    }

    addItem = (item) => {
        const { list } = this.state;


        this.setState({
            list: [{...item, _id: randomString()}, ...list]
        });
    }

    getListData(){
        //Call server to get list data

        this.setState({
            list: dummyList
        });

    }
    render(){
        const {list} = this.state;

        return (
            <div className="container">
                 <h1 className="center">To Do List</h1>
                 <AddItem add={this.addItem}/>
                 <List toDos={list}/>
            </div>
    
        );
    }
} 
    



export default App;
