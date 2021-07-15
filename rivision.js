


const callMe=(num1, num2)=> num1+num2;
const ammuKhan=(num1, num2)=> num1*num2;
function bigNumber( num1, num2){
    if(num1>num2)
    {
        return num1;
    }
    else{
        return num2;
    }
}
const BiggerNum=(num1, num2)=> (num1>num2) ? num1 : num2 ;
num1=30;
num2=60;
console.log(`sum of ${num1} + ${num2} = ${callMe( num1,num2)}`);
console.log(`sum of ${num1} * ${num2} = ${ammuKhan( num1,num2)}`);
console.log(`Big number is ${bigNumber( num1,num2)}`);
console.log(`Big number is ${bigNumber( 13, 58)}`);
console.log(`Big number is ${bigNumber( 213, 58)}`);
console.log(`Big number is ${bigNumber( 335, 6558)}`);
console.log(`Bigger number is ${BiggerNum(88, 888)}`);

