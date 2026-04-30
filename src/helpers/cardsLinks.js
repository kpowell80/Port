import planta from '../images/projectimages/Rectangle16.png';
import gov from "../images/projectimages/After.png";
import video from '../images/projectimages/Rectangle56.png';
import hhbw from '../images/projectimages/hhra.png';
import landscaping from '../images/projectimages/aslHero.png'; 
import travel from '../images/projectimages/dubaiHero.png'; 
import '../screens/cards/cards.css';



const cards=[
{
id:1,
image: landscaping,
title:"LANDSCAPING COMPANY WEBSITE",
li1:"Full React Build & Brand Transformation",
li2:"On-Site Research & Client Interviews",
li3:"Custom UI / Photography Direction",
connect:"./AllSeasons",
featured: true,
impact: "Traveled to Sun Valley, Idaho to transform an outdated web presence into a modern platform that drives client acquisition.",
tags: ["React", "UX/UI", "Full-Stack"]
},
{
id:2,
image: gov,
title:"NSA WEBSITE/MOBILE REDESIGN",
li1:"Redline/Competitor Analysis",
li2:"Usability Testing",
li3:"Prototyping/Ideation",
connect:"./Govt",
impact: "Redesigned government navigation flows with improved usability and accessibility.",
tags: ["UX/UI", "Research", "Prototyping"]
},
{
    id:3,
    image: planta,
    title:"PLANT WATERING ORIGINAL APP",
    li1:"User Interviews/Survey",
    li2:"User Matrix",
    li3:"Creating POV",
    connect:"./Case1",
    impact: "Zero-to-one product: from user research through high-fidelity prototype.",
    tags: ["UX/UI", "Research", "Mobile"]
    },
    {
        id:4,
        image: video,
        title:"CHARITY WEBSITE REDESIGN",
        li1:"Executive Director Interview",
        li2:"Affinity Diagram",
        li3:"User Flow",
        connect:"./Variety",
        impact: "Redesigned to increase online donations for Variety – The Children's Charity.",
        tags: ["UX/UI", "Redesign", "Non-Profit"]
        },
        {
            id:5,
            image:hhbw,
            title:"MOBILE TRAVEL ORIGINAL APP",
            li1:"Competitor Analysis",
            li2:"Empathy Mapping",
            li3:"Usability Testing",
            connect:"./Hitch",
            impact: "Full UX lifecycle: competitive analysis through tested prototype.",
            tags: ["UX/UI", "Mobile", "Research"]
            },
            {
                id:6,
                image:travel,
                title:"HYKER TRAVEL PLATFORM",
                li1:"Product Concept & UX Strategy",
                li2:"Full React Architecture",
                li3:"AI-Driven Discovery & Content System",
                connect:"./Hyker",
                comingSoon: true,
                impact: "Building a curated travel platform that feels less like a tool and more like a trusted guide — live build in progress.",
                tags: ["UX/UI", "React", "AI/ML"]
                },

]
export default cards