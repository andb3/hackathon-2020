class Event {
    constructor(id, name, location,regionID){
        this.id = id;
        this.name = name;
        this.regionID = regionID;
        this.location = location;
    }


}

var allEvents = [
    new Event = (1, "Trash Clean up", "Central Park", 1),
    new Event = (2, "Recycling Workshop", "Empire Sate Building", 1),
    new Event = (3, "Tree Planting", "Time Square", 1),
    new Event = (4, "Pollution protest", "Statue of Liberty", 1),
    new Event = (5, "Landfill Clean up","Capitol Building", 2),
    new Event = (6, "Vegan Seminar", "Washington Monument", 2),
    new Event = (7, "Tree Planting", "White house", 2),
    new Event = (8, "Recycling Work", "H St", 2),

]
var threads = getEventsFor(1);
events.forEach(events => {
    node = document.createElement("li");
    node.innerHTML = events.name;
    document.getElementById("event_holder").appendChild(node);
}
)