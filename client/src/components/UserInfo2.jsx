import React from 'react';

const UserInfo2 = (props) => {
  return (
    <div>
      {props.stockInfo.map((stock) => {
        return (
          <table className="userInfo2" key={stock.symbol}>
            <thead>
              {/* <tr>
                <td id="userAv">Your Average Cost</td>
              </tr>
              <tr>
                <td id="userAvNum">${stock.AV}</td>
              </tr> */}
              <div id="userAv">Your Average Cost</div>
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
// <div>Your Average Cost</div>
// <div>$13.44</div>
// <div>
//   <span>Shares</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>190</span>
// </div>
// <div>
//   <span>Portfolio Diversity</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>43.59%</span>
// </div>
// <div>
//   <span>Cash Held for Exercise</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$0.00</span>
// </div>
