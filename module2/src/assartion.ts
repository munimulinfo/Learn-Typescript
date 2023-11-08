{
    //  Learn type Assartion

    // type assartion that meeans  beter then typescript  type chek and i am told typescript this is number or string  like as number or string 

    let anything: any;

    anything = 'nissan';
    anything = true;
    anything = 22;
    //    anything have number type done 
    //    (anything as number)
    (anything as string).split


    // first one return string and second one return number type reselut
    const kgTogm = (vlaue: string | number): string | number | undefined => {

        if (typeof vlaue === "string") {
            const convertedvalue = parseFloat(vlaue) * 1000;
            return `convarted value is kgtogm ${convertedvalue}`;
        }

        if (typeof vlaue === 'number') {
            const convert = vlaue * 1000;
            return convert;
        }
    }

    const result1 = kgTogm(1000) as number;
    const result2 = kgTogm('1000') as string;


    // custom type asartion মানে টাইপ script কে বলে দেওয়া যে আমি জানি এটা হবে string or number

    type CustomError = {
        message: string;
    }

    try {

    } catch (error) {
        console.log((error as CustomError).message)
    }

}