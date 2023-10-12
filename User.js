const users = [];

const addUser = (id, name, room) => {
  const exesting_user = users.find(
    (element) => element.name === name && element.room === room
  );

  if (exesting_user) {
    return { error: "Username already exist" };
  }

  users.push({ id, name, room });

  return { user: { id, room, name } };
};

const removeUser = (id) => {
  let index = users.findIndex((element) => element.id == id);

  if (index == -1) {
    return "user does not exist";
  }

  const user = users.splice(index, 1);
  return `${user} removed`;
};

const getUser = (id) => {
  const user = users.find((element) => element.id === id);
  if (user) {
    return user;
  }
  return "User not availabel";
};

const getUsersInRoom = (room) => {
  const user_in_room = users.filter((user) => {
    return user.room == room;
  });

  if (user_in_room) {
    return user_in_room;
  } else {
    return "room is empty";
  }
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom, users };
