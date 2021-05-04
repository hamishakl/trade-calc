const portStartingAmount = 465; //Enter your portfolio amount
const DailyPNLGoal = 0.05; //Enter your PNL percentage goal
const portTradePercentage = 0.15; //Enter your port percentage for each trade
const tradePercentage = 0.15; //Enter the return percentage of your trades

console.log(`Starting port = ${portStartingAmount}`);
console.log(` `);

let arr = [];

let findPercentage = (a) => {
  return a * portTradePercentage;
};

let percentageReturn = (a) => {
  let trade = findPercentage(a);
  let percentageTotal = 1 + tradePercentage;
  let afterTrade = trade * percentageTotal;
  let balance = a - trade;
  return balance + afterTrade;
};

let goal = (a) => {
  pNLTotal = DailyPNLGoal + 1;
  return a * pNLTotal;
};

const target = goal(portStartingAmount);

let pnlCalc = (a, b) => {
  let pNLTotal = a - b;
  return pNLTotal;
};

let trades = (a) => {
  let trading = percentageReturn(a);
  arr.push(trading);
  if (trading < target) {
    console.log(`Trade #${arr.length} = $${trading}`);
    return trades(trading);
  } else {
    console.log(
      `Trade #${arr.length} = $${trading}. Make ${arr.length} trades with ${
        portTradePercentage * 100
      }% of your portfolio each returning ${
        tradePercentage * 100
      }% to achieve your daily PNL of ${DailyPNLGoal * 100}%`
    );
    console.log(" ");
    console.log(`PNL actual = ${pnlCalc(trading, portStartingAmount)}`);
    console.log(" ");
    return `PNL percentage = ${
      (pnlCalc(trading, portStartingAmount) / portStartingAmount) * 100
    }%`;
  }
};

console.log(trades(portStartingAmount));
