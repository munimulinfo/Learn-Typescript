// object type refarence
// object propaty type declare
const user: {
   name: string;
   age: number;
   district: string;
   marriedStatus: boolean;
  readonly company: string; // you can not chang this propaty value literal types
   gender: string;
  presentAddrss?: string;  //optional type 
  parmamentAddress: "rajsahi"; // literal types Direct value type you can not assinged other any  
                                //  word still rajsahi 

} = {
    name: "nissan",
    age: 25,
    district: "chapaiNawabganj",
    marriedStatus: true,
    company: 'phHero',
    gender: "male",
    parmamentAddress: "rajsahi"
}

