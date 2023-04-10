const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
// const jwt = require("jsonwebtoken");
const cors = require("cors");
const fs = require('fs');
// const jsonSecretKey = process.env.JSON_SECRET_KEY

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// // Function to get Token
// function getToken(req) {
//     return req.headers.authorization.split(' ')[1];
// }

// // Function to check registered Users
// function getUsers() {
//     const usersFile = fs.readFileSync('./data/users.json');
//     const users = JSON.parse(usersFile);
//     return users;
// };

// // Function to update list of Users
// function updateUsers(users) {
//     const usersJson = JSON.stringify(users);
//     fs.writeFileSync('./data/users.json', usersJson);
// };

// app.use((req, res, next) => {
//     // Favourites page should not be accessible without JWT, other pages can be accessed, even in 'guest' mode
//     if (req.url === '/favourites') {
//         const token = getToken(req);

//         if (token) {
//             console.log(token);
//             if (jwt.verify(token, jsonSecretKey)) {
//                 req.decode = jwt.decode(token);
//                 next();
//             }
//             else {
//                 res.status(403).json({error: 'Not authorized!'})
//             }
//         }
//         else {
//             res.status(403).json({error: 'No token, please login!'})
//         }
//     }
// });

app.listen(port, () => {
    console.log(`Now listening on Port: ${port}!`);
});