import React, { Component } from 'react';
import dummyList from '../data/to_do_list';

//console.log('Dummy List:' , dummyList);

class List extends Component {
    state = {
        list: []
    }

    componentDidMount(){
        this.getListData();
    }

    getListData(){
        //Call server to get list data

        this.setState({
            list: dummyList
        });

    }


    render(){
         const listElements = this.state.list.map((item) => {

           // console.log('Item', item)
                
            return <li key={item._id} className="collection-item">{item.title}</li>
         })
        console.log('State:', this.state);

        return (
            <div>
                <ul className="collection">
                {listElements}
                </ul>
            </div>
        );
    }
}

export default List;