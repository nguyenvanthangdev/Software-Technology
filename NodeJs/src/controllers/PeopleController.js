import PeopleServices from "../services/PeopleServices";

let handleGetAllPeoples = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters",
      peoples: [],
    });
  }
  let peoples = await PeopleServices.getAllPeoples(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    peoples,
  });
};

let handleCreateNewPeople = async (req, res) => {
  let errMessage = await PeopleServices.getCreateNewPeople(req.body);
  return res.status(200).json(errMessage);
};
let handleDeletePeople = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters !",
    });
  }
  let errMessage = await PeopleServices.getDeletePeople(req.body.id);
  return res.status(200).json(errMessage);
};

let handleEditPeople = async (req, res) => {
  try {
    let data = req.body;
    let errMessage = await PeopleServices.getUpdatePeopleData(data);
    return res.status(200).json(errMessage);
  } catch (e) {
    return res.status(500).json({
      errCode: -1,
      errMessage: "Internal server error",
    });
  }
};

module.exports = {
  handleGetAllPeoples: handleGetAllPeoples,
  handleCreateNewPeople: handleCreateNewPeople,
  handleEditPeople: handleEditPeople,
  handleDeletePeople: handleDeletePeople,
};
