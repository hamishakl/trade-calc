let port = 5157 + 500
const pnl = 1.08
const goal = 10000

let arr = []

let compound = (a, b) => {
    if (a > goal) {
      return a
    } else {
      compound(a*b, b)
      arr.push(a)
      console.log(`day #${arr.length} = ${a}`);
    }

}



console.log(compound(port, pnl))