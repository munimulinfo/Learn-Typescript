{
    //Learn Conostraints in Type Script

// extends is the powerfull key of typescript youn not provide this object all vlaue in function typescript error show 
    type User = {
     id:number;
     name: string;
     class: string;
     email: string
    }
    const globalStudent = <T extends User>(student: T) => {
        return {
            ...student,
        }
    };

    const student1 = globalStudent({
        id: 22,
        name: "nissan",
        class: "7",
        role: 5,
        email: "munimul.info@gmail.com"
    })
    const student2 = globalStudent({
        id: 22,
        name: "nissan",
        class: "7",
        role: 5,
        email: "munimul.info@gmail.com"
    })
    const student3 = globalStudent({
        id: 22,
        name: "nissan",
        class: "9",
        role: 5,
        email: "munimul.info@gmail.com"
    })

}