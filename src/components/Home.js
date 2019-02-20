import React from 'react'
import { connect } from 'react-redux';
import { Search, Product, FilterMenu } from './'

const Home = ({ searchedProducts }) => (
  <div>
    <img src="../images/logo.png" className="logo"/>
    <Search />
    <FilterMenu />
    <h1 className="heading">Products: </h1>
    <ul className="productList">{ listItems(searchedProducts) }</ul>
  </div>
);

const listItems = products => products.length === 0 ? <div>Sorry nothing was found in our super duper shop</div> : products.map(
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

);

const stateHome = ({ searchedProducts, noProductsFound }) => ({ searchedProducts, noProductsFound });

export default connect(stateHome, null)(Home);
