import axios from "../axios";

const getAllPeoples = (inputId) => {
  return axios.get(`/api/get-all-peoples?id=${inputId}`);
};
const createNewPeople = (data) => {
  return axios.post("/api/create-new-people", data);
};
const deletePeople = (userId) => {
  return axios.delete("/api/delete-people", {
    data: {
      id: userId,
    },
  });
};
const editPeople = (inputData) => {
  return axios.put("/api/edit-people", inputData);
};

export { getAllPeoples, createNewPeople, deletePeople, editPeople };
