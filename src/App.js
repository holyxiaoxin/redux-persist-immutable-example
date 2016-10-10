import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { mapDispatchToProps, connect } from './utils/connector';

class App extends Component {
  render() {
    const { counter, actions } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Counter</h2>
        </div>
        <p className="App-intro">
          { counter.get('count') }
        </p>
        <button onClick={actions.addCount} > Add </button>
      </div>
    );
  }
}

const mapStateToProps = ({ counter }) => ({ counter });
export default connect(mapStateToProps, mapDispatchToProps)(App);
