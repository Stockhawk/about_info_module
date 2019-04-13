import React from 'react';

const UserInfo2 = (props) => {
  return (
    <div>
      {props.stockInfo.map((stock) => {
        return (
          <table className="userInfo2" key={stock.symbol}>
            <thead>
              <caption id="userAv">Your Average Cost</caption>
              <div id="userAvNum">
              $
                {stock.AV}
              </div>
            </thead>
            <tbody>
              <tr>
                <td id="userInfo2Left">Shares</td>
                <td id="userInfo2Right">{stock.shares}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td id="userInfo2Left">Portfolio Diversity</td>
                <td id="userInfo2Right">
                  {stock.PD}
                %
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td id="userInfo2Left">Cash Held for Exercise</td>
                <td id="userInfo2Right">$0.00</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default UserInfo2;
