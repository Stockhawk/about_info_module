import React from 'react';


class Hover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: true
    };
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseLeave() {
    console.log('first')
    this.setState({
      hover: !this.state.hover
    });
    this.changeState();
  }

  changeState() {
    console.log('second')
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    return (
      <div>
        {this.state.hover ?
            <div>
              <div className="hover" onMouseLeave={this.onMouseLeave}>
                <table>
                  <caption id="hover-caption">
                    Preview of the list:
                  </caption>
                  <tr id="hover-th">
                    <th>Company</th>
                    <th>Price</th>
                  </tr>
                  <tr id="hover-table">
                    <td>{this.props.tags.symbols[0]}</td>
                    <td>${this.props.tags.price[0]}</td>
                  </tr>
                  <tr id="hover-table">
                    <td>{this.props.tags.symbols[1]}</td>
                    <td>${this.props.tags.price[1]}</td>
                  </tr>
                  <tr id="hover-table">
                    <td>{this.props.tags.symbols[2]}</td>
                    <td>${this.props.tags.price[2]}</td>
                  </tr>
                  <tr id="hover-table">
                    <td>{this.props.tags.symbols[3]}</td>
                    <td>${this.props.tags.price[3]}</td>
                  </tr>
                  <tr id="hover-table">
                    <td>{this.props.tags.symbols[4]}</td>
                    <td>${this.props.tags.price[4]}</td>
                  </tr>
                </table>
                <div id="warning">
                  *Click on the tag to see the full list!
                </div>
              </div>
              <div className="arrow-down"></div>
            </div>
        : null }
      </div>
    );
  }
}

// const Hover = (props) => {
// };

export default Hover;
