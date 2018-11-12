import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Items extends Component {
    render(){
        const items = this.props.items.map((item)=>{
            return <div key={item.id}><NavLink to={`/items/${item.id}`} activeClassName="active" onClick={this.isClick}><Item title={item.title}/></NavLink></div>
        })
        return(
                <div className="four wide column">
                    <div className="ui vertical fluid menu">
                    {items}
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state
    }
}
export default connect(mapStateToProps)(Items);