import React, {Component} from 'react';

class ProductRow extends Component {
    constructor() {
        super();
        this.state = {
            isChecked: false
        };
        this.checkedItem = this.checkedItem.bind(this);
    }

    checkedItem = function () {
        this.setState({
            isChecked: !this.state.isChecked
        });
    };

    render() {
        if (this.state.isChecked && this.props.toBasket) {
            return null;
        } else {
            let row = <tr>
                <td><input type='checkbox' name='product-list' id={this.props.id} onClick={this.checkedItem}/></td>
                <td>{this.props.nameCategory}</td>
                <td>{this.props.productName}</td>
                <td>{this.props.productPrice}</td>
            </tr>;
            return row;
        }

    }
}

export default ProductRow;