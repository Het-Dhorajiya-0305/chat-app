export let users = [];

function addUser({ id, name, room }) {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    console.log(users);

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if (existingUser) {
        console.log("USER ALL READY EXIST IN ROOM");
        return { error: "USER ALL READY EXIST IN ROOM" };

    }

    const user = { id, name, room };
    users.push(user);
    return { user };
}

function removeUser(id) {
    const newUsers = []
    let removedUser;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            removedUser = users[i]
        } else {
            newUsers.push(users[i])
        }
    }
    users = newUsers
    return removedUser
}

const getUser = (id) => users.find((user) => user.id === id);


function getUserINRoom(room) {
    const list = users.filter((user) => user.room === room);
    return list;

}
export { addUser, removeUser, getUser, getUserINRoom };