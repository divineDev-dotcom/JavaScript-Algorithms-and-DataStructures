function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let change = [];
  let totalCid = 0;

  // Calculate the total cash in drawer (totalCid)
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }

  // Handle insufficient funds
  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Handle exact change
  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Calculate the change
  cid = cid.reverse();

  for (let i = 0; i < cid.length; i++) {
    const currency = cid[i][0];
    const currencyValue = currencyValues[currency];
    let currencyAmount = cid[i][1];
    let currencyCount = 0;

    while (changeDue >= currencyValue && currencyAmount > 0) {
      changeDue -= currencyValue;
      changeDue = Math.round(changeDue * 100) / 100;
      currencyAmount -= currencyValue;
      currencyCount += currencyValue;
    }

    if (currencyCount > 0) {
      change.push([currency, currencyCount]);
    }
  }

  // Handle unable to return exact change
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

// Example test cases
console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));