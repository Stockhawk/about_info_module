import React from 'react';


class Hover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: true
    }
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
            {console.log('hover tags', this.props.tags)}
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
                  <td>AAPL</td>
                  <td>$139.45</td>
                </tr>
                <tr id="hover-table">
                  <td>MSFT</td>
                  <td>$138.2</td>
                </tr>
                <tr id="hover-table">
                  <td>DIS</td>
                  <td>$119.02</td>
                </tr>
                <tr id="hover-table">
                  <td>FB</td>
                  <td>$109.23</td>
                </tr>
                <tr id="hover-table">
                  <td>EQH</td>
                  <td>$17.93</td>
                </tr>
              </table>
              <div id="warning">
                *Click on the tag to see the full list!
              </div>
            </div>
            <div class="arrow-down"></div>
          </div>
          : null }
      </div>
    );
  }
}

// const Hover = (props) => {
// };

export default Hover;
