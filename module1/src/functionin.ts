// create function in typescript
//  function
// Arrow Function
// this function parameter num1 and  num2  type is number and not assigned other type value:
// this function return type declare it is number  

function add (num1:number, num2: number):number{
    return num1 + num2;
}
add(1,3);

const addBlance = (firstb: number , secb: number):number => firstb + secb

addBlance(20,2);

// object => function => method 
const poorUser = {

    name: 'nisssan',
    balance: 0,
    newblance(balance: number):number{
      return this.balance + balance;
    }
}
const richUser = {
    name: 'nisssan',
    balance: 10,
    newblance(balance: number):string{
      return `new blance is ${ this.balance + balance}`;
    }
}

// array map 
const rollnumber : number[] = [1,2,3,4,5,6];
 
const newrool: number[] = rollnumber.map((element : number): number => element*element);