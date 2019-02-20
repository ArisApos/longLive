import React from 'react'
import { connect } from 'react-redux';
import { Search, Product } from './'

const Home = ({ searchedProducts, noProductsFound }) => (
  <div>
    <img src="../images/logo.png" className="logo"/>
    <Search />
    <div className="sideMenu">
      <h3>SHOP</h3>
      <p>BY BRAND</p>
      <select>
        <option>Sector 9</option>
        <option>Arbor</option>
        <option>Roxy</option>
        <option>Madrid</option>
        <option>Naked</option>
      </select>
      <p>BY STYLE</p>
      <p>BY PRICE</p>
    </div>
    {noProductsFound && <h1>No Products Found</h1>}
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
