{
    //learn genaric type
    const num1: Array<number> = [1,2,3,4,5,6,7,8,];
    const num2: Array<string> = ["nissan", "mahin", "jisan"];
    const num3 : Array<boolean> = [true, false, true, false];

    // Dynamic way to conver genaric type 

    type GenaricArray<T> = Array<T>;
    const num4: GenaricArray<number> = [1,2,3,4,5,6,7,8,];
    const num5: GenaricArray<string> = ["nissan", "mahin", "jisan"];
    const num6 : GenaricArray<boolean> = [true, false, true, false];
   
    // genaric Array of objec Declare  dynamic way
    const alldata: GenaricArray<{name: string, role: number, class: string, weight: string}> = [
        {
            name: "nissan",
            role: 22,
            class: "seven",
            weight: "92"
        },
        {
            name: "nissan",
            role: 22,
            class: "seven",
            weight: "92"
        }
    ]

  // genaric tupple create type dynamick

   type GenaricTupple<x , y> = [x , y];

    const manus : GenaricTupple<string, string> = ["nissan", "mahin"];

     const manus1 : GenaricTupple<Number, Number> = [20, 45];
    
    const manus3 : GenaricTupple<boolean, null> = [ true, null];

    const userId : GenaricTupple<number, {name:string, roll: number}> = [22, {name: "nissan", roll:11}]

}