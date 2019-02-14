import React from 'react'
import { connect } from 'react-redux';
import { increaseCount } from '../models'

const Home = ({ count, onClick }) => (
  <div>
    <h1 onClick={ onClick }>Homepage: { count } </h1>
  </div>
);

const stateHome = ({ count }) => ({ count });

const dispatchHome = dispatch => ({
  onClick: () => {
    dispatch(increaseCount());
  },
});

export default connect(stateHome, dispatchHome)(Home);
