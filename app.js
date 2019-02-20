const http = new easyHttp();

// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const user = {
  name: "Kyle",
  username: "Cool",
  email: "smakce2@gmail.com"
};

http
  .post("https://jsonplaceholder.typicode.com/users/", user)
  .then(dat => console.log(dat))
  .catch(err => console.log(err));
// http
//   .delete("https://jsonplaceholder.typicode.com/sers/2")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
