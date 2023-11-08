{
    //Learn Asyncronus in Typescrpt 

    // fetch data 
    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: Boolean;
    }

    const getToDo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json();
        return data;

    }
   const result1 = getToDo();
   console.log(result1);


    //create promise
    // const createPromise = (): Promise<string> => {

    //     return new Promise<string>((resolve, reject) => {
    //         const data: string = 'something';
    //         if (data) {
    //             resolve(data);
    //         } else {
    //             reject("Failed to load data");
    //         };
    //     });
    // }

    // const showData = async (): Promise<string> => {
    //     const data: string = await createPromise();
    //     // console.log(data);
    //     return data
    // }
    // showData();
}