let Database = {
    cindy: {
        reminders: [
            {
                id: 1,
                title: "Reading",
                description: "Read book",
                location: "vancouver",
                completed: false,
                date: new Date(),
                tags: ["personal", "self-improvement"],
                tasks: ["reading"]
            },
            {
                id: 2,
                title: "Work ",
                description: "abcabc",
                location: "vancouver",
                completed: false,
                date: new Date(),
                tags: ["work", "skills"],
                tasks: ["Learn Node"]
            }
        ]
    },
    alex: {
        reminders: [
            {
<<<<<<< HEAD
                id: 3,
                title: "alex Rading",
                description: "abcabc",
                location: "vancouver",
                completed: false,
                date: new Date(),
                tags: ["family", "hoby"],
                tasks: ["reading"]
            },
            {
                id: 4,
                title: "alex Node",
                description: "abcabc",
                location: "vancouver",
                completed: false,
                date: new Date(),
                tags: ["work"],
                tasks: ["Learn Cooking"]
=======
            id: 100, 
            title: "alex Rading", 
            description: "abcabc",
            location: "vancouver", 
            completed: false, 
            date:new Date(), 
            tags: ["family", "hoby"],
            tasks:[ "reading"]         
            },
            {
            id: 101, 
            title: "alex Node", 
            description: "abcabc", 
            location: "vancouver", 
            completed: false, 
            date:new Date(), 
            tags: ["work"],
            tasks:[ "Learn Cooking"]        
>>>>>>> fde6834d70c35239d1ed3a176625252d4b582574
            }]
    }
}

module.exports = Database;