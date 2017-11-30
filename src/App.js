import React, { Component } from 'react';
import './App.css';
import StockInfo from './components/StockInfo'
import { fetchQuoteDorStock } from './api/iex'

fetchQuoteDorStock('nflx')
  .then((quote) => {
    console.log('Loaded Netflix', quote)
  })

class App extends Component {
  state = {
    quote: null
  }

  componentDidMount() {
    fetchQuoteDorStock('nflx')
      .then((quote) => {
        this.setState({ quote: quote})
      })
  }

  render() {
    // const quote = this.state.quote
    const { quote } = this.state


    return (
      <div className="App">
        {
          !!quote ? (
            <StockInfo
              { ...quote }
            />
          ) : (
            <p>Loading...</p>
          )
        }
      </div>
    );
  }
}

export default App;
