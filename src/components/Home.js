import React from 'react'
import { connect } from 'react-redux';
import { Search, Product, MainOptions } from './'

const Home = ({ searchedProducts }) => (
  <div className="homePage">
    <header className="header">
      <img src="../images/logo.png" alt='logo' className="logo" />
      <nav />
      <Search />
    </header>
    <main className="mainContent">
      <MainOptions />
      <div className="product-container">
        <ul className="product-list">{listItems(searchedProducts)}</ul>
      </div>
    </main>
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
