var socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  // socket.emit('createMessage', {
  //   from: 'Jen',
  //   text: 'Hey, it\'s Jen'
  // });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('got new message', message);
});
