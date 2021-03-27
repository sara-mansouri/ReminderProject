let Database = {
    cindy: {
        reminders: [
            {
                id: 1,
                title: "Reading",
                description: "Read book 1",
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
            }]
    }
}

/*

let editdata = (editedReminder, id)=>{

Database.cindy.reminders.forEach((reminder)=>{

    if (reminder.id === id){
        
        Database.cindy.reminders[reminder.id - 1]  =  editedReminder

    }

})




}*/

module.exports = Database;