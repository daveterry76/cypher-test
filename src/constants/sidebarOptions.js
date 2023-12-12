import { v4 as uuid } from 'uuid'


export const sidebarOptions = [
    {
        id: uuid(),
        name: "HTML",
        details: [
            {
                name: "Introduction to HTML",
                link: "/html/intro"
            },
            {
                name: "HTML Elements",
                link: "/html/elements"
            },
            {
                name: "HTML Forms",
                link: "/html/forms"
            },
        ]
    },
    {
        id: uuid(),
        name: "CSS",
        details: [
            {
                name: "Styling with CSS",
                link: "/css/styling"
            },
            {
                name: "CSS Flexbox",
                link: "/css/flexbox"
            },
            {
                name: "Responsive Designs",
                link: "/css/responsive"
            },
        ]
    },
    {
        id: uuid(),
        name: "JavaScript",
        details: [
            {
                name: "Introduction to JavaScript",
                link: "/js/intro"
            },
            {
                name: "DOM Manipulation",
                link: "/js/dom"
            },
            {
                name: "Event Handling",
                link: "/js/event"
            },
        ]
    },
    {
        id: uuid(),
        name: "Frontend Frameworks",
        details: [
            {
                name: "React.js Basics",
                link: "/frontend/react"
            },
            {
                name: "Vue.js Essentials",
                link: "/frontend/vue"
            },
            {
                name: "Angular Fundamentals",
                link: "/frontend/angular"
            },
        ]
    },
    {
        id: uuid(),
        name: "Backend Development",
        details: [
            {
                name: "Node.js Overview",
                link: "/backend/nodejs"
            },
            {
                name: "Express.js Basics",
                link: "/backend/expressjs"
            },
            {
                name: "RESTful APIs",
                link: "/backend/restfulapis"
            },
        ]
    },
    {
        id: uuid(),
        name: "Database Management",
        details: [
            {
                name: "Introduction to Databases",
                link: "/database/intro"
            },
            {
                name: "MongoDB Basics",
                link: "/database/mongodb"
            },
            {
                name: "SQL and Relational Databases",
                link: "/database/sqlrdb"
            },
        ]
    }
]