import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

class Items extends Component {
    constructor(){
        super(...arguments)
        this.currentId = '';
    }

    render(){
        const items = this.props.items.map((item)=>{
            if(this.currentId === item.id){
                return <div className="ui three column grid">
                <div className="left floated column" key={item.id}><NavLink to={`/items/${item.id}`} onClick={()=>
                {return this.currentId = item.id}} activeStyle={{color: 'blue'}}><Item title={item.title} /></NavLink>
                </div>
                    <div className="column">
                        <div className="ui segment">
                            <Item
                                 description={item.description}
                            />
                        </div>
                    </div>
                </div>
            }
            return <div key={item.id}><Link to={`/items/${item.id}`} onClick={()=> {return this.currentId = item.id}} ><Item title={item.title} /></Link></div>
        })
        return(
                <div className="ui row">
                    {items}
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
export default connect(mapStateToProps)(Items);