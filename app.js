const app = require("./server");

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server started on port " + port);
});
