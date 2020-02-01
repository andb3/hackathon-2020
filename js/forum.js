class Thread{
    constructor(id, name, userID, regionID){
        this.id = id;
        this.name = name;
        this.userID = userID;
        this.regionID = regionID;
    }
}

var allThreads = [
    new Thread(3219084, "Anyone want to clean up the river?", 2, 1),
    new Thread(7584435, "Thoughts on NYC Bill 3948?", 3, 1),
    new Thread(3209745, "Garbage Services", 1, 1),
    new Thread(8754239, "Weekly discussions", 4, 1),
    new Thread(3442389, "DC Test", 4, 2)
];

function getThreadsFor(regionID){
    return allThreads.filter(thread => thread.regionID == regionID);
}

var threads = getThreadsFor(1);
threads.forEach(thread => {
    node = document.createElement("li");
    node.innerHTML = thread.name;
    document.getElementById("forum_holder").appendChild(node);
}
)