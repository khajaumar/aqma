const MillageCost=(dist, Milage, fuelPrice)=>Math.floor((dist / Milage) * fuelPrice);


    console.log(`Amount need to fill fuel is ${MillageCost(300, 50, 102.89)}`);

