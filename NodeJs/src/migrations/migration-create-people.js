module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("people", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Ho_Ten: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Nam_Sinh: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Noi_Sinh: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Nguyen_Quan: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Dan_Toc: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Nghe_Nghiep: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Noi_Lam_Viet: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      So_CCCD: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Ngay_Cap: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Noi_Cap: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Nam_DK_Thuong_Tru: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Dia_Chi_DK_Thuong_Tru: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("people");
  },
};
