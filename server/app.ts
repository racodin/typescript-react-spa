import express from 'express';

const app = express();

app.use(express.static('build'));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(3000, ()=>{
  console.log("Server is running on port ")
});

// client build -> copy build folder -> move server folder -> start server

// [client]
// npm ci
// npm run build
// move client/build -> server/build

// [server]
// npm ci
// tsc
// node app.js