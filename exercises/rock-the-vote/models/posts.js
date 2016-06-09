var uuid = require("uuid");

var posts = [
    {
        title: "Soviet leader Chernenko dies at 73",
        description: "Thirteen months after his after his appointment to General Secretary of the Soviet Union's communist party. Mikhail Gorbachev, despite his youth, steps in to take his place",
        votes: 0,
        comments: [],
        id: uuid.v4(),

    },
    {
        title: "TWA Airliner hijacked",
        description: "Two Shi'ite Muslim gunmen capture TWA airliner with 133 aboard, 104 of them Americans (June 14); 39 remaining hostages freed in Beirut (June 30).",
        votes: 0,
        comments: [],
        id: uuid.v4(),

    },
    {
        title: "Superbowl",
        description: "San-Francisco defeats Miami",
        votes: 0,
        comments: [],
        id: uuid.v4(),

    },
    {
        title: "",
        description: "",
        votes: 0,
        comments: [],
        id: uuid.v4(),
        
    },

];

module.exports = posts;