{
    //Learn Function with Genaric 

    // this function retur string Array
    const number = (parameter: string): string[] => {
        return [parameter];
    }

    // this function output string Arrray
    const number2 = <T>(num: T): T[] => {
        return [num];
    }
    const newnumbeer2 = number2<string>("string");

    const number3 = <T>(first: T): T[] => {
        return [first];
    };
    type NUM = [number, string]

    const numbe4 = number3<NUM>([1, "nissan"]);

    //Tuple with Genaric Fucntion

    const newnumber1 = <T, M>(param1: T, param2: M): [T, M] => {
        return [param1, param2];
    }

    type Nissan = {
        id: number;
        name: string;
    }

    const user33: Nissan = {
        id: 23,
        name: 'mahin'
    }
    const user334: Nissan = {
        id: 44,
        name: 'mahin',
    }

    const result = newnumber1<Nissan, Nissan>(user33, user334)


    // 
    const newStudent = <T>(sutdent: T) => {
        const course = "next leve web development";
        return {
            ...student,
             course
        }

    }

    const resultStudent = newStudent<{ id: number, name: string }>({ id: 222, name: "nissan" });

}