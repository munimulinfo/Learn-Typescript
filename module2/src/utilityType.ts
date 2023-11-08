{
    //Learn Utility Types in TypeScript

    // pik type in object 

    type User1 = {
        name: string;
        email: string;
        address: string;
    }

    // that means  ami User1 type thake pik korlam name ar type take and email ar type ke
    type SingleUser = Pick<User1, "name" | 'email'>

    //omit type
    type contacinfo = Omit<User1, 'name' | "address">

    // required 
    type seor = Required<User1>;
    //partial
    type Mistake = Partial<User1>;
    // readonly
    // can not chang this vlaue 
    type ReadONlyPropaty =  Readonly<User1>;
    const person1 : ReadONlyPropaty = {
        name: 'nissan',
        address: "nis",
        email: "munimul.info@gmail.com"
    };
  
    const nissan3 = person1.name 
    // Record type 

    type MyObj = Record<string,string>;
    const userpopular: MyObj = {
        name: 'niisan',
        age: 'nissan',
    }
   // jehutu akti object ar ar first vlaue sobsomoy string tai first string and second 
   // janina je scond value ki hobe tai unknown diye raksi
   
    const emptyobj : Record<string, unknown> = {};

}