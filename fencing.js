//const fencing=( edges, numberOfWires, rate)=>{
    //let sum=0;
   // for(let i=0; i<edges.length; i++){
     //   sum=sum + edges[i];

   // }
     //   return sum* numberOfWires*rate;
//};

//console.log(`Total Cost for fencing= ${fencing([10,15,10,10,10,10,22], 5, 10)}`);

//const fencing=(edges, numberOfWires, rate)=>{
    //let sum=0;
    //edges.forEach(element => {
      ///  sum=sum+element;
    //});
    //return sum*numberOfWires*rate;
//}

//console.log(`Total Cost for fencing= ${fencing([10,15,10,10,10,10,22], 5, 10)}`);

//const evenCollection = (number) =>{
    //let sumEven=0;
    //let sumOdd=0;
    //number.forEach( element => {
        //element % 2 == 0 ? (sumEven= sumEven + element) : (sumOdd=sumOdd+element) ;

    //});
   // return `    sum of  Even numbers= ${sumEven}
    //and sum of Odd numbers= ${sumOdd}
    //Total sum of numbers= ${sumEven+sumOdd}`;
//}
//console.log(evenCollection([5,2,7,9,10,8,17,115,10]));
const squr =(number, power) => number.map( (element) => element**power);

console.log(squr([4, 7, 9, 10, 11, 15], 3));
console.log(squr([4, 7, 9, 10, 11, 15], 5));

