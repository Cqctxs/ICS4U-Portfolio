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
];
const projects = [
    {
        name: "InBot",
        description:
            "Discord bot that allows users to send and receive emails on Discord. This project was made by Felix Zhao, Alex Zhu, Glen Lin and I as a submission to LyonHacks III.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "gmail-api",
                color: "green-text-gradient",
            },
            {
                name: "discord-api",
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
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
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