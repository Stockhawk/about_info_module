import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClicked: false,
      readClicked: false,
    };
    this.onShowMoreClick = this.onShowMoreClick.bind(this);
    this.onReadMoreClick = this.onReadMoreClick.bind(this);
  }

  onReadMoreClick() {
    this.setState({
      readClicked: !this.state.readClicked
    });
  }

  onShowMoreClick() {
    this.setState({
      showClicked: !this.state.showClicked
    });
  }

  render() {
    return (
      <div className="about">
        {this.props.stockInfo.map((stock) => {
          return (
            <div key={stock.symbol}>
              <div className="aboutMain">
                <span id="aboutMain">About</span>
                <span id="aboutMin" onClick={this.onShowMoreClick}>{this.state.showClicked ? 'Show Less' : 'Show More'}</span>
              </div>
              <div>
                <section>
                  <p className="description">
                    {this.state.readClicked ? stock.description : stock.description.split('\n')[0]}
                    &nbsp;
                    <span id="readMore" onClick={this.onReadMoreClick}>{this.state.readClicked ? 'Read Less' : 'Read More'}</span>
                  </p>
                </section>
              </div>
              <div className="grid-container">
                <div className="grid-item">
                  <div id="aboutName">CEO</div>
                  <div id="aboutItem">{stock.CEO}</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Employees</div>
                  <div id="aboutItem">{stock.employees}</div>
                </div>
                <div className="grid-item" style={{ fontSize: 13 }}>
                  <div id="aboutName">Headquarters</div>
                  <div id="aboutItem">{stock.HQc}, {stock.HQs}</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Founded</div>
                  <div id="aboutItem">{stock.founded}</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Market Cap</div>
                  <div id="aboutItem">{stock.MC}B</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Price-Earning Ratio</div>
                  <div id="aboutItem">{stock.PER}</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Dividend Yield</div>
                  <div id="aboutItem">$0.00</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Average Volume</div>
                  <div id="aboutItem">{stock.AV}M</div>
                </div>
                {this.state.showClicked ? (
                  <div className="grid-container">
                    <div className="grid-item">
                      <div id="aboutName">High Today</div>
                      <div id="aboutItem">${stock.high}</div>
                    </div>
                    <div className="grid-item">
                      <div id="aboutName">Low Today</div>
                      <div id="aboutItem">${stock.low}</div>
                    </div>
                    <div className="grid-item">
                      <div id="aboutName">Open Price</div>
                      <div id="aboutItem">${stock.open}</div>
                    </div>
                    <div className="grid-item">
                      <div id="aboutName">Volume</div>
                      <div id="aboutItem">{stock.volume}M</div>
                    </div>
                    <div className="grid-item">
                      <div id="aboutName">52 Week High</div>
                      <div id="aboutItem">${stock.yearHigh}</div>
                    </div>
                    <div className="grid-item">
                      <div id="aboutName">52 Week Low</div>
                      <div id="aboutItem">${stock.yearLow}</div>
                    </div>
                  </div>
                ) : null }
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default About;
