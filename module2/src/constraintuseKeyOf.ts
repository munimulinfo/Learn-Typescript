{
    // Learn Consotraint  use key of power

     interface User {
        name: string;
        age: number;
        address: string;
     }
     type Owner1 = 'name' | 'age' | 'address' //manualy read user
    //  const result1 : Owner1 = ""
     type owner = keyof User;
     
     // user function keyof power 

     const searching  = <X , Y extends keyof X>( userobject: X , key:Y) => {
        return userobject[key];
     }
   
     const user1:User = {
        name: 'nissan',
        age: 22,
        address: "chapai"
     }

     const result = searching(user, 'name')

     //
}