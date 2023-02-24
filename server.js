const mongoose = require("mongoose");
const colors = require("colors");

const app = require("./app");
const { errorHandler, notFoundHandler } = require("./middlewares/errorHandler");

/* =============== database connection ================= */
mongoose
  .connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => console.log("database connect successfully"))
  .catch((err) => console.log(err));

/* ============= server ============= */
const port = process.env.PORT || 5000;

/*================ 404 not found handle ===============*/
app.use(notFoundHandler);

/*================= common error handler ===============*/
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app is running on port ${port}`.yellow.bold);
});

/*=============== If no error is handled express ==============*/
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  // app.close(() => {
  //   process.exit(1);
  // });
});
