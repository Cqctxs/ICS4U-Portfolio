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
            "Inbot is a project made by Alex Zhu, Felix Zhao, Glen Lin and I as a submission to the LyonHacks III" +
            " hackathon. Inbot is a new, innovative discord bot that can be used to access, read and send emails to" +
            " the user. We all learned a lot in this project, learning how to use the Gmail and Discord" +
            " APIs. Throughout the development process, we faced various challenges and hurdles. Learning to work" +
            " with the Gmail API was a particularly significant learning experience for us. We delved into the" +
            " documentation, familiarized ourselves with the intricacies of the API, and learned how to authenticate" +
            " and interact with Gmail accounts programmatically. This knowledge enabled us to access and read" +
            " emails, as well as send them on behalf of the user through our Discord bot. The LyonHacks submission" +
            " can be seen with the link above.",
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
            "Focusfy is a web application that helps users focus. Features include a weekly calendar system, to do" +
            " list and a focus timer. This project was made by Alex Zhu, Raymond Ouyang and I. Throughout the" +
            " development process, we dove into the fundamentals of web development. We familiarized" +
            " ourselves with JavaScript, HTML, and CSS, which are the building blocks of modern web applications." +
            " This project allowed us to put our knowledge into practice and deepen our understanding of these" +
            " technologies. We gained valuable insights into structuring web pages, handling user interactions, and" +
            " styling elements to create an intuitive and visually pleasing user interface." +
            " Creating Focusfy taught us more than just technical skills. We learned the importance" +
            " of effective communication and teamwork. Focusfy can be accessed with the link above.",
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
        source_code_link: "https://focusfy.vercel.app/",
    },
    {
        name: "Finals Frenzy",
        description:
            "Finals Frenzy is a game made by Nirvan Rabbani and I for my ICS4U0 final project. The theme of survival" +
            " perfectly encapsulated the intensity and pressure of exam and finals week. We" +
            " recognized that this was a relatable and relevant topic for our target audience, as we were personally" +
            " juggling multiple culminating projects and studying for exams ourselves. By choosing this theme, we" +
            " aimed to create a game that not only reflected the real-life challenges faced by students but also" +
            " offered strategies and tips for success. Throughout the development process, we conducted " +
            " research on effective study techniques and time management. We wanted to" +
            " ensure that our game not only entertained players but also provided advice" +
            " that could help players succeed during exam and finals week. The github to the project can be" +
            " accessed with the link above.",
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