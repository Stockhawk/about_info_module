import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="about">
        {this.props.stockInfo.map((stock, key) => {
          return (
            <div>
              <div className="aboutMain">
                <span id="aboutMain">About</span>
                <span id="aboutMin">Show More</span>
              </div>
              <div>
                <section>
                  <p className="description">{stock.description}</p>
                </section>
              </div>
              <div className="grid-container">
                <div className="grid-item">
                  <div id="aboutName">CEO</div>
                  <div>{stock.CEO}</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Employees</div>
                  <div>{stock.employees}</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Headquarters</div>
                  <div>{stock.HQc}, {stock.HQs}</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Founded</div>
                  <div>{stock.founded}</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Market Cap</div>
                  <div>{stock.MC}B</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Price-Earning Ratio</div>
                  <div>{stock.PER}</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Dividend Yield</div>
                  <div>$0.00</div>
                </div>
                <div className="grid-item">
                  <div id="aboutName">Average Volume</div>
                  <div>{stock.AV}M</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default About;
