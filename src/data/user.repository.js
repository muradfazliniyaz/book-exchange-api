import User from "../models/user.model.js";

async function getAllUsers() {
  try {
    return await User.findAll();
  } catch (error) {
    console.log(error);
  }
}

async function getUserById(pUserId) {
  try {
    return await User.findOne({ where: { id:pUserId } });
  } catch (error) {
    console.log(error);
  }
}

async function getUserByEmail(pEmail) {
  try {
    return await User.findOne({ where: { email:pEmail } });
  } catch (error) {
    console.log(error);
  }
}

async function createUser(pUser) {
  try {
    return await User.create(pUser);
  } catch (error) {
    console.log(error);
  }
}

async function changeUserInfo(pUserId, aUser) {
  try {
    return await User.update(aUser, { where: { id:pUserId } });
  } catch (error) {
    console.log(error);
  }
}

async function deleteUserById(pUserId) {
  try {
    return await User.destroy({where: { id:pUserId }});
  } catch (error) {
    console.log(error);
  }
}

export { getUserById, createUser, changeUserInfo, deleteUserById, getAllUsers, getUserByEmail };
