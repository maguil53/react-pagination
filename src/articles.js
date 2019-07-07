const articles = [
    {
        id: 1,
        author: "Marco",
        title: "Why you should be using React",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 2,
        author: "Bill",
        title: "The world is coming to an end!",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 3,
        author: "Sam",
        title: "Hello World!",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 4,
        author: "Jose",
        title: "Hot dogs are great, here's why",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 5,
        author: "Chris",
        title: "Why Marvel is better than DC",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 6,
        author: "Karina",
        title: "Top Python projects",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 7,
        author: "Todd",
        title: "Top tips for your resume",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 8,
        author: "Maria",
        title: "How to build an amazing portfolio.",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 9,
        author: "Alex",
        title: "Iphone vs. Android",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 10,
        author: "Wendy",
        title: "College is where I found myself, here's why.",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 11,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 12,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 13,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 14,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 15,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 16,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 17,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 18,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 19,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 20,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
    {
        id: 21,
        author: "Steven",
        title: "Why Kotlin is better than Java",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Facilis est reprehenderit cupiditate cbus, aut dolor molestiae tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "Facilis bus, aut dolor molestiae consequatur totam officiis tempor" +
        "Facilis est reprehenderit cupiditate consequatur totam officiis tempor" +
        "dolores molestias alias.Voluptatibus, aut dolor molestiae ullam accusantium" +
        "error atque veniam libero obcaecati!"
    },
  ]

export {articles};