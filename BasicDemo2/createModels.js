let User = require("./database");

let newUser = new User({
  name: "Chris",
  username: "kevin",
  password: "password",
  admin: true
});

newUser.dudify(function(err, name) {
  if (err) throw err;
  console.log("your name is" + name);
});

newUser.save(function(err) {
  if (err) throw err;
  console.log("User saved successfully!");
});

newUser.save(function(err) {
  if (err) throw err;

  console.log("User created!");
});
