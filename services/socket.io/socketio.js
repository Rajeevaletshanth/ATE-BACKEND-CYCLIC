// const {socketIO, server} = require('../../server')

// const io = socketIO(server, {
//     transports:['polling'],
//     cors:{
//       cors: {
//         origin: "http://localhost:3001"
//       }
//     }
// })

// io.on('connection', (socket) => {
//     console.log('A user is connected');
  
//     socket.on('message', (message) => {
//       console.log(`message from ${socket.id} : ${message}`);
//     })
  
//     socket.on('disconnect', () => {
//       console.log(`socket ${socket.id} disconnected`);
//     })
// })

// module.exports = io;