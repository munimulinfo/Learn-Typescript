{
    //learn generic with interface
    //Generic is wow featuer i have ever ever seen dynamic type control wow

    interface User<T, X = null> {
        name: string,
        email: string,
        age: number,
        job: T,
        smartWatch?: X
    }

    interface Poor {
        company: string;
        location: string;
        salary: number;
        ofday: string;
    }

    interface PoorWatch {
        brand: string;
        price: string;
    }


    const poorDeveloper: User<Poor, PoorWatch> = {
        name: 'nissan',
        email: 'munimul.info@gmail.com',
        age: 20,
        job: {
            company: 'navana',
            location: "chapai",
            salary: 20,
            ofday: "4 din"
        }
        ,
        smartWatch: {
            brand: "nissan",
            price: "20k"
        }
    }


    const user3: User<Poor> = {
        name: 'nissan- Islam',
        email: 'munimul.info@gmail.com',
        age: 22,
        job: {
            company: 'navana',
            location: "chapai",
            salary: 20,
            ofday: "4 din",

        }
    }

    const user4: User<Poor,PoorWatch> = {
        name: 'nissan- Islam',
        email: 'munimul.info@gmail.com',
        age: 22,
        job: {
            company: 'navana',
            location: "chapai",
            salary: 20,
            ofday: "4 din",

        },
       smartWatch:{
          brand: 'nissan',
          price: "20k"
       }
    }

}