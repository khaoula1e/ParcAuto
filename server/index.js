const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const vehiculesRouter = require("./routes/Vehicules");
app.use("/cars", vehiculesRouter);

const chauffeurRouter = require("./routes/Chauffeurs");
app.use("/drivers", chauffeurRouter);

const vignetteRouter = require("./routes/Vignettes");
app.use("/vignettes", vignetteRouter);

const reparationRouter = require("./routes/Reparations");
app.use("/reparation", reparationRouter);


db.sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log("Server running on port 8000");
  });
});