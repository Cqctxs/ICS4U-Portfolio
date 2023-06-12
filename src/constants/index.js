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
            "Web application that helps users focus. Features include a weekly calendar system, to do list and a" +
            " focus timer. This project was made by Alex Zhu, Raymond Ouyang and I. We learned a lot through this" +
            " project, learning about ",
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
        name: "Finals Frenzy",
        description:
            "Finals Frenzy is a game made by Nirvan Rabbani and I for my ICS4U0 final project. The theme of the" +
            " project was to create a game about survival. We chose the theme of surviving exam and finals week." +
            " This was a relevant topic at the time since we made the project juggling other culminating projects and" +
            " studying for exams. Our game was focused on helping other teenagers handle this stressful time with" +
            " our research and experience, so other people can succeed.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "Java Swing",
                color: "green-text-gradient",
            },
            {
                name: "Github",
                color: "pink-text-gradient",
            },
        ],
        image: dmoj,
        source_code_link: "https://dmoj.ca/user/Lost_Cactus",
    },
];

export {projects};