{
    // Learn Ternary opraretor / Nullish Coalesing Opraretor/ optioanl Chaining oparetor in ts

    // Ternary opraretor 
    const age: number = 18;
    const isAdult = age >= 18 ? "adult" : "notAdult";
    console.log({ isAdult });

    // Nullish Collesing oparetor
    // null and undefined decition making

    const isAuthentic = null;
    // const result1 = isAuthentic ?? "guest";
    // console.log({result1});
    
    // diffarence beetween nullish vs ternary oparetor
    //  ternary oparetor sobmoy setake false kore dei jokhn kono data na thke and  nullish oparetor  sudhu null and undefind handle kore baki gula na 
     const result1 = isAuthentic ?? "guest";
     const result2 = isAuthentic ? isAuthentic : "guest";
     console.log({result1}, {result2})

//   using object nullish oparetor
  type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        parmanentAddress?: string
    }
  }


   const user: User = {
     name: "nissan",
     address: {
        city: 'ctg',
        road: "awsome road",
        presentAddress: "cgt town"
     }
  }

//   Access to the parmament address 
 const address = user?.address?.parmanentAddress ?? 'no parmanent address';
 console.log({address});

}