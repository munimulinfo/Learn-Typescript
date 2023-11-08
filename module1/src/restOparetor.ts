// Learn RestOparetor 
const greatFriends = (...friends:string[]) => {
   friends.forEach((name: string) => console.log(`hi ${name}`))
}
greatFriends('abul', "babul", "ubul", "nabul");

// All Friend are add one array 