import express from "express";

import PeopleController from "../controllers/PeopleController";

let router = express.Router();
let initWebRoutes = (app) => {
  //People
  router.get("/api/get-all-peoples", PeopleController.handleGetAllPeoples);
  router.post("/api/create-new-people", PeopleController.handleCreateNewPeople);
  router.put("/api/edit-people", PeopleController.handleEditPeople);
  router.delete("/api/delete-people", PeopleController.handleDeletePeople);

  return app.use("/", router);
};
module.exports = initWebRoutes;
