import db from "../models/index";

let checkSoCCCD = (So_CCCD) => {
  return new Promise(async (resolve, reject) => {
    try {
      let people = await db.People.findOne({
        where: { So_CCCD: So_CCCD },
      });
      if (people) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllPeoples = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let peoples = "";
      if (id === "ALL") {
        peoples = await db.People.findAll();
      }
      if (id && id !== "ALL") {
        peoples = await db.People.findOne({
          where: { id: id },
        });
      }
      resolve(peoples);
    } catch (e) {
      reject(e);
    }
  });
};

let getCreateNewPeople = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkSoCCCD(data.So_CCCD);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage:
            "Your So CCCD is already in use. Please try another So CCCD!",
        });
      } else {
        await db.People.create({
          Ho_Ten: data.Ho_Ten,
          Nam_Sinh: data.Nam_Sinh,
          Noi_Sinh: data.Noi_Sinh,
          Nguyen_Quan: data.Nguyen_Quan,
          Dan_Toc: data.Dan_Toc,
          Nghe_Nghiep: data.Nghe_Nghiep,
          Noi_Lam_Viet: data.Noi_Lam_Viet,
          So_CCCD: data.So_CCCD,
          Ngay_Cap: data.Ngay_Cap,
          Noi_Cap: data.Noi_Cap,
          Nam_DK_Thuong_Tru: data.Nam_DK_Thuong_Tru,
          Dia_Chi_DK_Thuong_Tru: data.Dia_Chi_DK_Thuong_Tru,
        });
        resolve({
          errCode: 0,
          errMessage: "ok",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let getDeletePeople = (id) => {
  return new Promise(async (resolve, reject) => {
    let people = await db.People.findOne({
      where: { id: id },
    });
    if (!people) {
      resolve({
        errCode: 2,
        errMessage: "The People is not exist",
      });
    }
    await db.People.destroy({
      where: { id: id },
    });
    resolve({
      errCode: 0,
      errMessage: "The People is deleted",
    });
  });
};
let getUpdatePeopleData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "Missing required parameters",
        });
      }
      let people = await db.People.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (people) {
        people.Ho_Ten = data.Ho_Ten;
        people.Nam_Sinh = data.Nam_Sinh;
        people.Noi_Sinh = data.Noi_Sinh;
        people.Nguyen_Quan = data.Nguyen_Quan;
        people.Dan_Toc = data.Dan_Toc;
        people.Nghe_Nghiep = data.Nghe_Nghiep;
        people.Noi_Lam_Viet = data.Noi_Lam_Viet;
        people.So_CCCD = data.So_CCCD;
        people.Ngay_Cap = data.Ngay_Cap;
        people.Noi_Cap = data.Noi_Cap;
        people.Nam_DK_Thuong_Tru = data.Nam_DK_Thuong_Tru;
        people.Dia_Chi_DK_Thuong_Tru = data.Dia_Chi_DK_Thuong_Tru;
        await people.save();
        resolve({
          errCode: 0,
          errMessage: "Update the People succeeds !",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "People is not found !",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllPeoples: getAllPeoples,
  getCreateNewPeople: getCreateNewPeople,
  getDeletePeople: getDeletePeople,
  getUpdatePeopleData: getUpdatePeopleData,
};
