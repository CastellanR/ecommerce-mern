const routes = require("express").Router();
const cors = require("cors");

routes.use(cors({ optionsSuccessStatus: 200 }));

routes.get("/", (req: any, res:any) => {
  res.status(200).json({ message: "Connected!" });
});

//API Routes

export default routes;
