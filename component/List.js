import React, { Component } from 'react';
import Item from './Item';
class List extends Component {
    render() {
    const { productList, itemChangeHandler } = this.props;
    return (
    <div>
        {
            productList ?
                <div>
                    <div className="main-list" > 
                        {
                            productList.map((item, i) =>
                                <Item
                                    Image_URL={item.Image_URL}
                                    Brand_Name={item.Brand_Name}
                                    Product_name={item.Product_name}
                                    Quantity={item.Quantity}
                                    MRP={item.MRP}
                                    Offer_Text={item.Offer_Text}
                                    Price={item.Price}
                                    selected_quantity={item.selected_quantity}
                                    itemChangeHandler={itemChangeHandler}
                                    item={item}
                                    index={i}
                                />
                            )
                        }
                        
                    </div>
                   
                </div>
                :
                <p>please wait...</p>
        }
    </div>
    );
    }
}

export default List;