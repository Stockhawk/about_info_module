import React from 'react';

const UserInfo1 = (props) => {
  return (
    <div>
      {props.stockInfo.map((stock) => {
        return (
          <table className="userInfo1" key={stock.symbol}>
            <thead>
              {/* <tr>
                <td id="userEquity">Your Equity</td>
              </tr>
              <tr>
                <td id="userEquityNum">${(stock.equity).toLocaleString()}</td>
              </tr> */}
              <caption id="userEquity">Your Equity</caption>
              <div id="userEquityNum">${(stock.equity).toLocaleString()}</div>
            </thead>
            <tbody>
              <tr>
                <td id="userInfo1Left">Cost</td>
                <td id="userInfo1Right">${(stock.cost).toLocaleString()}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td id="userInfo1Left">Today's Return</td>
                <td id="userInfo1Right">
               +$
                  {stock.TR.toLocaleString()}
                  (
                  {((stock.TR / stock.equity) * 100).toFixed(2)}
                  %
                  )
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td id="userInfo1Left">Total Return</td>
                <td id="userInfo1Right">
                 $
                  {(stock.equity - stock.cost).toFixed(2)}
                  &nbsp;(
                  {(((stock.equity - stock.cost).toFixed(2) / stock.cost) * 100).toFixed(2)}
                %)
                </td>
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
