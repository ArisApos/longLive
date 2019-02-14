import React from 'react'
import { connect } from 'react-redux';
import { increaseCount } from '../models'
import { Search, Product } from './'

const Home = ({ searchedProducts }) => (
  <div>
    <Search />
    <h1>Products: </h1>
    <ul className="productList">{ listItems(searchedProducts) }</ul>
  </div>
);

const listItems = products => (
  products.map(
    (product, i) => (
      <li key={ i } className="product">
        <Product
          name={ product.name }
          type={ product.type }
          price={ product.price }
          imageSrc={ product.imageSrc }
        />
      </li>
    )
  )
)

const stateHome = ({ searchedProducts }) => ({ searchedProducts });
//
// const dispatchHome = dispatch => ({
//   onHomeClick: () => {
//     dispatch(increaseCount());
//   },
// });

export default connect(stateHome,)(Home);
