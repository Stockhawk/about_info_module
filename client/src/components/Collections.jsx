import React from 'react';
import Hover from './Hover.jsx'

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState() {
    return {
      hover: !this.state.hover,
    };
  }

  render() {
    return (
      <div className="collections">
        <div id="collections">
          Collections
        </div>
        <br></br>
        {this.props.stockInfo.map(stock => (
          <div key={stock.symbol}>
            <div>
              {this.state.hover && <Hover mouseOver={this.handleMouseOver} />}
              <div
                className="tags"
                onMouseEnter={this.handleMouseOver}
                // onMouseLeave={this.handleMouseOver}
              >
                {stock.tags[0]}
              </div>
              &nbsp;
              <div className="tags">{stock.tags[1]}</div>
              &nbsp;
              <div className="tags">{stock.tags[2]}</div>
              &nbsp;
              <div className="tags">{stock.tags[3]}</div>
            </div>
            <div>
              <div id="tags2">{stock.tags[4]}</div>
              &nbsp;
              <div id="tags2">{stock.tags[5]}</div>
              &nbsp;
              <div id="tags2">{stock.tags[6]}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Collections;
