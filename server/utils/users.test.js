const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Node course'
    },{
      id: 2,
      name: 'Jen',
      room: 'React course'
    },{
      id: 3,
      name: 'Julie',
      room: 'Node course'
    }]
  });
  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Felix',
      room: 'testroom'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
  it('Should return names for Node course', () => {
    var userList = users.getUserList('Node course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });
  it('Should return names for react course', () => {
    var userList = users.getUserList('React course');

    expect(userList).toEqual(['Jen']);
  });
  it('Should remove a user', () => {
    var userList = users.removeUser(1);

    expect(userList).toEqual(users.users[0]);
  });
  it('Should not remove user', () => {
    var userList = users.removeUser(44);

    expect(userList).toEqual(users.users[0]);
  });
  it('Should find user', () => {
    var user = users.getUser(1);

    expect(user).toMatchObject(users.users[0])
  });
  it('Should not find user', () => {
    var user = users.getUser(44);

    expect(user).toBeFalsy();
  })

});
