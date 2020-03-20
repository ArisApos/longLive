import React from 'react'
import { connect } from 'react-redux';
import { Search, Product, FilterMenu } from './'

const Home = ({ searchedProducts }) => (
  <div className="homePage">
    <nav className='header'>
     <img src="../images/logo.png" className="logo"/>
    </nav>
    <Search />
    <div className="collection">
      <FilterMenu />
      <div className="product-container">
        <ul className="product-list">{ listItems(searchedProducts) }</ul>
      </div>
    </div>
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

const stateHome = ({ searchedProducts }) => ({ searchedProducts });

export default connect(stateHome, null)(Home);
