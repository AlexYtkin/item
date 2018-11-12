import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class ItemShow extends Component {
    render(){
        const path = this.props.match.params.id;
        console.log(path)
        const { items } = this.props;
        const item = items.find((t) => {
            return String(t.id) === path
        })
        return(
            <div className="ui segment">
                <Item
                    description={item.description}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state
    }
}
export default connect(mapStateToProps)(ItemShow);