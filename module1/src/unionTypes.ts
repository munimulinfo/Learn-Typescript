{
    // learn union Types data 
    // that is union type data declare string literal type union 
    type FrontendDeveloper = "goodDeveloper" | "badDeveloper";
    type BackendDeveloper = "gredDeveloper" | "ProDeveloper";

    type FullStackDeveloper = FrontendDeveloper | BackendDeveloper;

    const nissan: FrontendDeveloper = "goodDeveloper";
    const mahin : FullStackDeveloper = "ProDeveloper";

//   union type data use in  object 
   type User = {
     name: string;
     email: string;
     age: number;
     gender: "female" | "male" | "Other";
     blodGroup: "a+" | "O+" | "Ab+";
   }
   const user1:User = {
    name: "nissan",
    email: "munimu",
    age: 30,
    gender: "male",
    blodGroup: "a+"
   }


}