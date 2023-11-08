{
    //Learn Conditional type in typescript

    type A1 = null;
    type A2 = undefined;
    type A3 = boolean;

     type Nissan = A1 extends undefined ? true : false;
     type Nissan2 = A3 extends boolean ? true : false;
     type Nissan3 = A2 extends undefined ? true : false;

     type N = A3 extends boolean ? true : A2 extends undefined ? true : false;

    type Sheikh = {
        plane: string;
        car: string;
        bike: string;
        home: string;
    }
    type chekViechale <T> = T extends keyof Sheikh ? true : false; 
    type sekhViechile = chekViechale<"bike">

}