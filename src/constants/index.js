import {inbot, focusfy, dmoj} from "../assets/index.js";

export const navLinks = [
    {
        id: "oop",
        title: "OOP",
    },
    {
        id: "arrays",
        title: "Arrays and ArrayLists",
    },
    {
        id: "search",
        title: "Search and Sort",
    },
    {
        id: "recursion",
        title: "Recursion",
    },
    {
        id: "bibliography",
        title: "Bibliography",
    },
];
const projects = [
    {
        name: "InBot",
        description:
            "Discord bot that allows users to send and receive emails on Discord. This project was made by Felix Zhao, Alex Zhu, Glen Lin and I as a submission to LyonHacks III.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Gmail-API",
                color: "green-text-gradient",
            },
            {
                name: "Discord-API",
                color: "pink-text-gradient",
            },
        ],
        image: inbot,
        source_code_link: "https://devpost.com/software/inbot-zn9i1o",
    },
    {
        name: "Focusfy",
        description:
            "Web application that helps users focus. Features include a weekly calendar system, to do list and a focus timer. This project was made as my ICS3U final project.",
        tags: [
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: focusfy,
        source_code_link: "https://github.com/theCityCR/ICS-11-Culminating-Project",
    },
    {
        name: "DMOJ Problems",
        description:
            "DMOJ is an online competitive programming judge, where users can solve competitive programming problems. I solve problems on DMOJ to practice my coding skills.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "C++",
                color: "green-text-gradient",
            },
            {
                name: "Python",
                color: "pink-text-gradient",
            },
        ],
        image: dmoj,
        source_code_link: "https://dmoj.ca/user/Lost_Cactus",
    },
];

export {projects};