const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {}
  }
  People.init(
    {
      Ho_Ten: DataTypes.STRING(255),
      Nam_Sinh: DataTypes.STRING(255),
      Noi_Sinh: DataTypes.STRING(255),
      Nguyen_Quan: DataTypes.STRING(255),
      Dan_Toc: DataTypes.STRING(255),
      Nghe_Nghiep: DataTypes.STRING(255),
      Noi_Lam_Viet: DataTypes.STRING(255),
      So_CCCD: DataTypes.STRING(255),
      Ngay_Cap: DataTypes.STRING(255),
      Noi_Cap: DataTypes.STRING(255),
      Nam_DK_Thuong_Tru: DataTypes.STRING(255),
      Dia_Chi_DK_Thuong_Tru: DataTypes.STRING(255),
    },
    {
      sequelize,
      modelName: "People",
      freezeTableName: true,
    }
  );
  return People;
};
