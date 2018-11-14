import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

/*
Компонент для отображения информации item по id.
Сейчас, не используется.
 */

class ItemShow extends Component {
    render(){
        const path = this.props.match.params.id;
        const { items } = this.props;
        const item = items.find((i) => {
            return String(i.id) === path
        })
        return(
            <div className="column">
                <Item
                    description={item.description}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
export default connect(mapStateToProps)(ItemShow);