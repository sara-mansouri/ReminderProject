let Database = {
    cindy: {
        reminders: [
            {
                id: 1,
                title: "Personal",
                description: "for myself improvement",
                location: "vancouver",
                completed: false,
                date: new Date(),
                tags: ["personal", "self-improvement"],
                tasks: ["reading"]
            },
            {
                id: 2,
                title: "Work ",
                description: "skills",
                location: "vancouver",
                completed: false,
                date: new Date(),
                tags: ["work", "skills"],
                tasks: ["Learn Node"]
            },
            {
                id: 3,
                title: "Hobby ",
                description: "Whatever I enjoy working on in my spare time",
                location: "vancouver",
                completed: false,
                date: new Date(),
                tags: ["painting ", "crafts"],
                tasks: ["shopping supplies","planning for it"]
            }
        ]
    },
    alex: {
        reminders: [
            {
                id: 4,
                title: "alex Rading",
                description: "abcabc",
                location: "vancouver",
                completed: false,
                date: new Date(),
                tags: ["family", "hoby"],
                tasks: ["reading"]
            },
            {
                id: 5,
                title: "alex Node",
                description: "abcabc",
                location: "vancouver",
                completed: false,
                date: new Date(),
                tags: ["work"],
                tasks: ["Learn Cooking"]
            }]
    }
}

module.exports = Database;