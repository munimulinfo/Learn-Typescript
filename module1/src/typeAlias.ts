// Learn Type Alias
// one object type declare and multiple object use this type
{

type Student ={
    name: string;
    class: string;
    role: number;
    address: string;
    section: string ;
    contactno ?: number;
}

const student1: Student  ={
   name: 'nissan',
   class: 'seven',
   role: 8,
   address: "madhobpur",
   section: "a"
}

const student2: Student  ={
   name: 'nissan',
   class: 'seven',
   role: 8,
   address: "madhobpur",
   section: "a",
   contactno: 1799846537
}

// type alias use any variable

type name = string;
type role = number;

const userName : name = "nissan";
const  nissanrole: role = 20;

// type alias use function  Arrow function  

type Add = (num1: number, num2: number) => number
const add: Add = (num1, num2) => num1 + num2;

}