import React from 'react';
import { Popup } from 'semantic-ui-react';
import Hover from './Hover.jsx';

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
        {console.log('prop tags', this.props.tag)}
        <br></br>
        {this.props.stockInfo.map(stock => (
          <div key={stock.symbol}>
            <div>
              <Popup
                trigger={<div className="tags">{stock.tags[0]}</div>}
                content={<Hover tags={this.props.tag} />}
                on="hover"
                position="top center"
              />
              &nbsp;
              <Popup
                trigger={<div className="tags">{stock.tags[1]}</div>}
                content={<Hover />}
                hoverable
                position="top center"
              />
              &nbsp;
              <Popup
                trigger={<div className="tags">{stock.tags[2]}</div>}
                content={<Hover />}
                on="click"
                position="top center"
              />
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
