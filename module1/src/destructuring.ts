// Learn desturcturing in typescript

// object desturucturing
const newuser = {
    name: {
        firstNmae: "nissan",
        secondName: "nissan",
        lastName: "mahin" 
    },
    age: 22,
    address: 'mama bari'
}

 const {age, address, name: {lastName, secondName, firstNmae}} = newuser;

 // Arrray desturcturing 

 const myFriends = ["nissan", "mahin", 'ni', "foru", "jhoru"];

//  const [a,b,c,d,e] = myFriends; // serial ways destructuring
//  const [,,c] = myFriends;  just "ni" friend find outd
 const [,,,d,...rest] = myFriends; // foru frend then other all friend in rest variable


