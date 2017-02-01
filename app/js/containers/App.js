import React, { Component } from 'react';

import Menu from '../components/Menu';

export default class App extends Component {
  render() {
    const { children } = this.props; // eslint-disable-line

    return (
      <div className='About'>
        <Menu />
        { children }
      </div>
    );
  }
}
