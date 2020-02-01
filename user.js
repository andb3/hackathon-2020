class User{
    constructor (id, username, displayName, registered){
        this.id = id;
        this.username = username;
        this.displayName = displayName;
        this.registered = registered
    }
}

var allUsers = [
    new User(1, "bfranklin", "Ben Franklin", []),
    new User(2, "gwashington", "George Washington", []),
    new User(3, "ahamilton", "Alexander Hamilton", []),
    new User(4, "jmadison", "James Madison", [])
]