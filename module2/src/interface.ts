{
    //   learn Interface 
//   interface can declare object 
    interface UserWithRole1 {
        name: string;
        email: string;
        roll: string;
    };

    interface UserWithRole2 {
        name: string;
        email: string;
        roll: string;
    }
//  interface can extentds value object 
    interface UserWithRole1 extends UserWithRole2 { manager: string, nissan: null };

    const user1: UserWithRole1 = {
        name: 'nissan',
        email: "nissan@gmail.com",
        roll: "manager",
        manager: "mahin",
        nissan: null
    }

    //   interface can declare type array 
    
    interface Add1 {
         [index:number] :number;
    }

    const numb1: Add1 = [1, 2, 3, 4, 5, 6, 8, 10];

    // interface can declare type function 
   interface Add2 {
      (value: number) : number;
   }
    
    const add : Add2 = (value) => {
         return value*2;
    }


    // type alis and type interface 

    type Users1 = {
          name: string;
          roll: number;
    }

    interface Mahin {
         name: string;
         roll: number;
         contact: number;
    }

    interface User1 extends Mahin {manager: string };
    type User2 = Mahin & {nissan: string, mahin: string}; 

    const  nissan1: User2 = {
         name: 'nissan',
         roll: 2,
         contact: 354,
         nissan: "nissan",
         mahin: "nissan",
    }

}