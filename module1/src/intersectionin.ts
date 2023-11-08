// learn intersection data 
//  intersection data type & diye prokash kora hoi 
{
    type FrontendDeveloper = {
        skills: string[];
        designation1: string;
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: string;
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullStackDeveloper = {
        skills: ['Html', "csss", "node", "express"],
        designation1: 'fulll stack developer',
        designation2: "mkhaon"
    }
}