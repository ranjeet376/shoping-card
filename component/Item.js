import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { Brand_Name, Product_name, Quantity, MRP, Offer_Text, Price, selected_quantity, Image_URL, itemChangeHandler, item, index } = this.props;
        return (
            <div>
                <div className="card">
                    <div className="p-view">
                        <img style={{ width: "150px" }} src={Image_URL} alt={"pic"}/>
                        <h3>{Offer_Text}</h3>
                    </div>
                    <div className="items-lists">
                        <h3 className="product brand">{Brand_Name}</h3>
                        <p className="product">{Product_name}</p>
                        <p className="product">{Quantity}</p>
                        <p className="product1">MRP  {MRP}</p>
                        <p className="product"><b>RS  {Price}</b></p>
                        {selected_quantity === 0 ?
                            <button className="btn" onClick={() => itemChangeHandler(item, index, 1)}>ADD CARD</button>
                            :
                            <div className="button">
                                <button className="sub-button1" onClick={() => itemChangeHandler(item, index, 0)}>-</button>
                                <h3 className="json-quantity">{item.selected_quantity}</h3>

                                <button className="add-button" onClick={() => itemChangeHandler(item, index, 1)}>+</button>
                            </div>
                        }
                    </div>
                </div>
                <div className="hr"></div>
            </div>
        );
    }
}

export default Item;