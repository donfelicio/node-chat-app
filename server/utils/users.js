[{
  id: '/#asdfasdfjkasdlfjkhasdf',
  name: 'Felix',
  room: 'Felix fans'
}]

//addUser(id, name, room)
//removeUser(id)
//getUser(name, room)
//getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.users.filter((user) => user.id !== id)[0]
    if(user){
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
    //return user that was removed
  }
  getUser(id) {
    return this.user = this.users.filter((user) => user.id === id)[0]
  }
  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old`;
//   }
// }
//
// var me = new Person('Felix', 25);
// var description = me.getUserDescription();
// console.log(description);

module.exports = {Users};
