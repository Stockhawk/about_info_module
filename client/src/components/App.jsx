import React from 'react';
import { Router, Route, Swotch} from 'react-router';
import UserInfo1 from './UserInfo1.jsx';
import UserInfo2 from './UserInfo2.jsx';
import About from './About.jsx';
import Collections from './Collections.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockInfo: [],
    };
  }

  componentDidMount() {
    this.getStockInfo();
  }

  getStockInfo() {
    // const url = window.location.pathname;
    // const splitUrl = url.split('/');
    // const symbolId = splitUrl[splitUrl.length - 2];
    fetch(`/stocks/AAPL`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then((parsedJSON) => {
        console.log('data', parsedJSON);
        // const currStockInfo = [... this.state.stockInfo, parsedJSON];
        this.setState({
          stockInfo: parsedJSON,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="grid-container-app">
          <div id="app-grid-item"><UserInfo1 stockInfo={this.state.stockInfo} /></div>
          <div id="app-grid-item"><UserInfo2 stockInfo={this.state.stockInfo} /></div>
        </div>
        <div>
          <About stockInfo={this.state.stockInfo} />
        </div>
        <div>
          <Collections stockInfo={this.state.stockInfo} />
        </div>
      </div>
    );
  }
}

export default App;
