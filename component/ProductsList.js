import React, { Component } from 'react';
import './Checkout.css';
import Popup from './Popup';
import List from './List';


class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
            showCheckoutBox: false,
            totalBillingAmount: 0,
            totalSelectedQuantity: 0,
            productList: null,
        }
    }
    onConfirmHandler = () => {

        let productListUpdated = this.state.productList.map((item, i) => {
            item.selected_quantity = 0;
            return item
        })

        this.setState({
            showCheckoutBox: false,
            totalBillingAmount: 0,
            totalSelectedQuantity: 0,
            productList: productListUpdated
        })

        alert("Your Tranction is successfully done");
    }

    onCancelHandler = () => {
        this.setState({ showCheckoutBox: false })
    }
    itemChangeHandler = (item, i, code) => {
        const { productList } = this.state
        if (code === 1) {   // 1:Add 
            productList[i].selected_quantity = item.selected_quantity + 1
            this.setState({
                productList,
                totalBillingAmount: this.state.totalBillingAmount + productList[i].Price,
                totalSelectedQuantity: this.state.totalSelectedQuantity + 1
            })
        }
        if (code === 0) { // 0: Subtract
            productList[i].selected_quantity = item.selected_quantity - 1
            this.setState({
                productList,
                totalBillingAmount: this.state.totalBillingAmount - productList[i].Price,
                totalSelectedQuantity: this.state.totalSelectedQuantity - 1
            })
        }
    }
    cheakoutHandler = () => {
        if (this.state.totalBillingAmount <= 0) {
            alert("Please add the item to the Card")
            this.setState({ showCheckoutBox: false })
        } else {

            this.setState({ showCheckoutBox: true })


        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/Procuts_Lists")
            .then((response) => {
                response.json().then((result) => {
                    this.setState({ productList: result })
                })
            })
    }
    render() {
        const { totalBillingAmount, productList, totalSelectedQuantity } = this.state
        const { productTitle } = this.props;
        return (
            <div>
                <h1 >{productTitle}</h1>
                <List
                    productList={productList}
                    itemChangeHandler={this.itemChangeHandler}
                />
                <div className="mainpage">
                    <h3 className="Qty">Qty {totalSelectedQuantity}</h3>
                    <h3 className="Total">Total {totalBillingAmount}</h3>
                    <button className="btn-checkout" onClick={() => this.cheakoutHandler()}>CHECKOUT</button>
                </div>
                <div>
                    {this.state.showCheckoutBox ? <Popup
                        onConfirmHandler={this.onConfirmHandler}
                        onCancelHandler={this.onCancelHandler}
                        totalBillingAmount={totalBillingAmount}
                    /> : null}
                </div>
            </div>
        );
    }
}

export default ProductsList;