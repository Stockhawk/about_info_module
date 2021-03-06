import React from 'react';
import UserInfo1 from './UserInfo1.jsx';
import UserInfo2 from './UserInfo2.jsx';
import About from './About.jsx';
import Collections from './Collections.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockInfo: [],
      tags: [],
    };
  }

  componentDidMount() {
    this.getStockInfo();
  }

  getStockInfo() {
    const url = window.location.pathname;
    const splitUrl = url.split('/');
    const symbolId = splitUrl[splitUrl.length - 2];

    fetch(`/api/quotes/${symbolId}`, { method: 'GET' })
      .then(response => response.json())
      .then(parsedJSON => this.setState({ stockInfo: parsedJSON }))
      .then(() => fetch(`/api/tags/${this.state.stockInfo[0].tags}`, { method: 'GET' }))
      .then(response => response.json())
      .then(parsedJSON2 => this.setState({ tags: parsedJSON2 }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <div className="grid-container-app">
          <UserInfo1 stockInfo={this.state.stockInfo} />
          <div id="app-grid-item"><UserInfo2 stockInfo={this.state.stockInfo} /></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <About stockInfo={this.state.stockInfo} />
        </div>
        <br></br>
        <br></br>
        <div>
          <Collections stockInfo={this.state.stockInfo} tag={this.state.tags}/>
        </div>
      </div>
    );
  }
}

export default App;
