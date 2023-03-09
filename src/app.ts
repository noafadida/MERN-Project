import server from "./server";
import io from "./socket_server";
io(server);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

export = server;
