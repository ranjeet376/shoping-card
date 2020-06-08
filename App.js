import React from 'react';
import './ProductsList.css'
import ProductsList from './component/ProductsList';

function App() {
  return (
    <div className="App">
      <ProductsList
        productTitle="Grocery Products"
      />
    </div>
  );
}
export default App;
