import React, { Component } from 'react';
import './App.css';
import StockInfo from './components/StockInfo'

class App extends Component {
  state = {
    quote: {
      symbol: 'NFLX',
      companyName: 'Netflix Inc.',
      primaryExchange: 'Nasdaq Global Select',
      latestPrice: 188.15,
      latestSource: 'Close',
      wek52High: 204.39,
      week52Low: 113.95
    }
  }

  render() {
    // const quote = this.state.quote
    const { quote } = this.state


    return (
      <div className="App">
        <StockInfo
          { ...quote }
        />
      </div>
    );
  }
}

export default App;
