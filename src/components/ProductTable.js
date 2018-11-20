import React, {Component} from 'react';
import ProductRow from "./ProductRow";

class ProductTable extends Component {
    constructor() {
        super();
        this.state = {
            price_list: null,
            isLoad: false,
            isOrdered: false
        };
        this.addToBasket = this.addToBasket.bind(this);
        this.resetProducts = this.resetProducts.bind(this);

    }

    addToBasket = function () {
        this.setState({
            isOrdered: true
        });
        this.forceUpdate();
    };

    componentDidMount() {
        fetch('https://ssdev.superagent.ru/TestApp/Values/GetWithParent')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoad: true,
                        price_list: Object.values(result)
                    });
                    console.log(result);
                }
            );

    }

    render() {
        let addToBasket = this.state.isOrdered;
        if (!this.state.isLoad) {
            return <div>Loading...</div>
        } else {
            let row_list = this.state.price_list.map(function (item) {
                let list = Object.values(item.skus).map(product =>
                    <ProductRow nameCategory={item.group.name}
                                key={item.group.name + "_" + item.group.id + "_" + product.id}
                                id={item.group.name + "_" + item.group.id + "_" + product.id}
                                productName={product.name}
                                productPrice={product.price}
                                toBasket={addToBasket}
                    />);
                return list;
            });
            let table = <table className='table table-responsive'>
                <thead>
                <tr>
                    <th></th>
                    <th>Категория</th>
                    <th>Название</th>
                    <th>Цена</th>
                </tr>
                </thead>
                <tbody>
                {row_list}
                </tbody>
            </table>;
            return <div className='row'>
                {table}
                <button type="button" className="btn btn-primary" onClick={this.addToBasket}>Добавить в корзину</button>
            </div>;
        }

    }
}

export default ProductTable;