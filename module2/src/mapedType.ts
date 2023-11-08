{
    //Learn Maped Type in type script

    const number1: number[] = [1, 3, 4, 6, 7,];
    const newnumber: string[] = number1.map(num => num.toString());
    console.log(newnumber);

    // maped type use can other object or arry type change
    //   like chang Areanumber  object propataty number to string;
    type AreaNumber = {
        height: number;
        widht: number;
    }
    type AreaSelector = {
        [key in keyof AreaNumber]: string;
    }

    type Height = AreaNumber['height'];  //loookup type



    // genaric  maped type Fexibility to declayer type
    //   ultimate key is vlaue of objec propaty and object all propaty are map 
    type AreaCalcute<T> = {
        [key in keyof T]: T[key];
    }

    const are1: AreaCalcute<{ id: number; name: string; marride: boolean }> = {
        id: 20,
        name: 'nissan',
        marride: true,
    };


}