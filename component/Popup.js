import React, { Component } from 'react';
import './Popup.css';
class Popup extends Component {
  render() {
    const { onCancelHandler, onConfirmHandler, totalBillingAmount } = this.props;
    return (
      <div className="popupWindow">
        <h1>Your Total Price:{totalBillingAmount}</h1>
        <button className="onConfirm-btn" onClick={onConfirmHandler}>Payment</button>
        <button className="onConfirm-btn" onClick={onCancelHandler}>Cancel</button>
      </div>
    );
  }
}

export default Popup;