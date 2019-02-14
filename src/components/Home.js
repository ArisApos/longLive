import React from 'react'
import { connect } from 'react-redux';
import { increaseCount } from '../models'
import Search from './Search'

const Home = ({ count, onHomeClick }) => (
  <div>
    <Search />
    <h1 onClick={ onHomeClick }>Homepage: { count } </h1>
  </div>
);

const stateHome = ({ count }) => ({ count });

const dispatchHome = dispatch => ({
  onHomeClick: () => {
    dispatch(increaseCount());
  },
});

export default connect(stateHome, dispatchHome)(Home);
