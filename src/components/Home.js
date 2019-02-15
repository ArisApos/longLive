import React from 'react'
import { connect } from 'react-redux';
import { Search, Product } from './'

const Home = ({ searchedProducts }) => (
  <div>
    <img src="../images/logo.png" className="logo"/>
    <Search />
    <h1 className="heading">Products: </h1>
    <ul className="productList">{ listItems(searchedProducts) }</ul>
  </div>
);

const listItems = products => (
  products.map(
    ({ name, type, brand, price, imageSrc }, i) => (
      <li key={ i } className="product">
        <Product
          name={ name }
          type={ type }
          brand={ brand }
          price={ price }
          imageSrc={ imageSrc }
        />
      </li>
    )
  )
);

const stateHome = ({ searchedProducts }) => ({ searchedProducts });

export default connect(stateHome, null)(Home);
