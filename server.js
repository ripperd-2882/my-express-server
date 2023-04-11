const express = require("express");
const app = express();

app.get("/", function (req, res) {
    // console.log(request);
    res.send("<h1>Hello!</h1>");
});

app.get("/contact", function (req, res) {
    // console.log(request);
    res.send("Contact me: deepank1661@gmail.com");
});

app.get("/about", function (req, res) {
    // console.log(request);
    res.send("<h1>About Me</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
});

app.get("/docs", function (req, res) {
    // console.log(request);
    res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});