import React from 'react';
import { Popup, TransitionablePortal } from 'semantic-ui-react';
import Hover from './Hover.jsx';

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hoveredTag: [],
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.onHoverGetValue = this.onHoverGetValue.bind(this);
  }


  onHoverGetValue(e) {
    const name = e.target.innerHTML;
    // console.log('name', name);

    let tagHovered;
    this.props.tag.forEach((tag) => {
      // console.log('tag', tag.tag)
      if (tag.tag === name) {
        console.log(tag)
        tagHovered = tag;
        return;
      }
    });
    this.setState({
      hoveredTag: tagHovered,
    });
  }

  toggleHoverState() {
    return {
      hover: !this.state.hover,
    };
  }

  handleMouseOver() {
    this.setState(this.toggleHoverState);
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
                trigger={<div className="tags" onMouseEnter={e => this.onHoverGetValue(e)}>{stock.tags[0]}</div>}
                content={<Hover tags={this.state.hoveredTag} />}
                hoverable
                position="top center"
              />
              &nbsp;
              <Popup
                trigger={<div className="tags" onMouseEnter={e => this.onHoverGetValue(e)}>{stock.tags[1]}</div>}
                content={<Hover tags={this.state.hoveredTag} />}
                hoverable
                position="top center"
              />
              &nbsp;
              <Popup
                trigger={<div className="tags" onMouseEnter={e => this.onHoverGetValue(e)}>{stock.tags[2]}</div>}
                content={<Hover tags={this.state.hoveredTag} />}
                hoverable
                position="top center"
              />
              &nbsp;
              <Popup
                trigger={<div className="tags" onMouseEnter={e => this.onHoverGetValue(e)}>{stock.tags[3]}</div>}
                content={<Hover tags={this.state.hoveredTag} />}
                hoverable
                position="top center"
              />
            </div>
            <div>
              <Popup
                trigger={<div id="tags2" onMouseEnter={e => this.onHoverGetValue(e)}>{stock.tags[4]}</div>}
                content={<Hover tags={this.state.hoveredTag} />}
                hoverable
                position="top center"
              />
              &nbsp;
              <Popup
                trigger={<div id="tags2" onMouseEnter={e => this.onHoverGetValue(e)}>{stock.tags[5]}</div>}
                content={<Hover tags={this.state.hoveredTag} />}
                hoverable
                position="top center"
              />
              &nbsp;
              <Popup
                trigger={<div id="tags2" onMouseEnter={e => this.onHoverGetValue(e)}>{stock.tags[6]}</div>}
                content={<Hover tags={this.state.hoveredTag} />}
                hoverable
                position="top center"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Collections;
