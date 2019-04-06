import React from 'react';

const Hover = (props) => {
  return (
    <div className="hover" onMouseLeave={props.mouseOver}>
      <table>
        <caption>
          Preview of the list!
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
      <br></br>
      <div id="warning">
        *Click on the tag to see the full list!
      </div>
    </div>
  );
};

export default Hover;
