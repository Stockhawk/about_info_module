import React from 'react';

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div id="collections">
          Collections
        </div>
        <br></br>
        <div>
          <div>
            <div id="tags">Female CEOs</div>
            &nbsp;
            <div id="tags">100 Most Popular</div>
            &nbsp;
            <div id="tags">Manufacturing</div>
            &nbsp;
            <div id="tags">Electronics</div>
          </div>
          <br></br>
          <div>
            <div id="tags2">Video Games</div>
            &nbsp;
            <div id="tags2">Semiconductors</div>
            &nbsp;
            <div id="tags2">Technology</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
