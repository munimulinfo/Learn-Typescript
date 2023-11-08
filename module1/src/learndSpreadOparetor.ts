// LearnSpread Oparetor 

const class1 : string[] = ['nissan', 'mahin', "tonmoy"];
const class2: string[] = ['h1', "h2", 'h3',"h4"];
 class1.push(...class2);
// output ['nissan', 'mahin', "tonmoy",'h1', "h2", 'h3',"h4"];

const mentors1 = {
    pepole1: 'nissan',
    pepole2: 'mahin'
}

const mentors2 = {
     people3 : 'nissan',
     people4: "nissan"
}

const mentorlist = {
    ...mentors1,
    ...mentors2
}

// output  {pepole1: 'nissan',pepole2: 'mahin', people3 : 'nissan',people4: "nissan"}