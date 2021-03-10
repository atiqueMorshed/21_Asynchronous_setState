import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 69
    }
  }

  handleChange = () => {
    this.setState((prevState, prevProps) => (
      {value: prevState.value + prevProps.increment}
    ), () => console.log(this.state.value));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.value}</p>
          <button onClick={this.handleChange}>Update</button>
        </header>
      </div>
    );
  }
}

export default App;
