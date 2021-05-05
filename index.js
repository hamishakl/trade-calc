const portStartingAmount = 500; //Enter your portfolio amount
const dailyPNLGoal = 0.05; //Enter your PNL percentage goal
const portTradePercentage = 0.40; //Enter your port percentage for each trade
const tradePercentage = 0.20; //Enter the return percentage of your trades
// const portStartingAmount = document.getElementById('portfolio--input').value; //Enter your portfolio amount
// const dailyPNLGoal = document.getElementById('dailyPNLGoal--input').value; //Enter your PNL percentage goal
// const portTradePercentage = document.getElementById('portPercentage--input').value; //Enter your port percentage for each trade
// const tradePercentage = document.getElementById('tradePercentage--input').value; //Enter the return percentage of your trades

console.log(portStartingAmount)
console.log(dailyPNLGoal);
console.log(portTradePercentage);
console.log(tradePercentage);

let val = (a) => {
  document.getElementById('c').innerHTML = `Port percentage for each trade = ${a}%`
  console.log(`Port percentage for each trade = ${a}%`)
}

// var form = document.getElementById("formWrapper");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);

// document.getElementById('a').innerHTML = 
// `Starting port = ${portStartingAmount}`

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
  pNLTotal = dailyPNLGoal + 1;
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
      }% to achieve your daily PNL of ${dailyPNLGoal * 100}%`
    );
    console.log(" ");
    console.log(`PNL actual = $${pnlCalc(trading, portStartingAmount)}`);
    console.log(" ");
   console.log( `PNL percentage = ${
      (pnlCalc(trading, portStartingAmount) / portStartingAmount) * 100
    }%`);
  }
};

console.log(trades(portStartingAmount));
