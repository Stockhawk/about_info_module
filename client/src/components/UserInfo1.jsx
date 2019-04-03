import React from 'react';

const UserInfo1 = (props) => {
  return (
    <div>
      {props.stockInfo.map((stock, key) => {
        return (
          <table className="userInfo1" key={key}>
            <thead>
              <div id="userEquity">Your Equity</div>
              <div id="userEquityNum">${stock.equity}</div>
            </thead>
            <tbody>
              <tr>
                <td id="userInfo1Left">Cost</td>
                <td id="userInfo1Right">${stock.cost}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td id="userInfo1Left">Today's Return</td>
                <td id="userInfo1Right">${stock.TR}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td id="userInfo1Left">Total Return</td>
                <td id="userInfo1Right">$</td>
              </tr>
            </tbody>
          </table>

        );
      })}
      {/* <div>
        <span id="userInfo1Left">Cost</span>
        <span id="userInfo1Right">5000</span>
      </div>
      <div>
        <span id="userInfo1Left">Today's Return</span>
        <span id="userInfo1Right">$-197.87</span>
      </div>
      <div>
        <span id="userInfo1Left">Total Return</span>
        <span id="userInfo1Right">$-900.19</span>
      </div> */}
    </div>
  );
};
export default UserInfo1;
