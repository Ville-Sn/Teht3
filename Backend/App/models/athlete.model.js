module.exports = (sequelize, Sequelize) => {
  const Athlete = sequelize.define(
    "athlete",
    {
      firstname: {
        type: Sequelize.STRING(32),
      },
      lastname: {
        type: Sequelize.STRING(32),
      },
      nickname: {
        type: Sequelize.STRING(32),
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      pictureURL: {
        type: Sequelize.STRING(255),
      },
      sport: {
        type: Sequelize.STRING(32),
      },
      achievements: {
        type: Sequelize.STRING(255),
      },
    },
    {
      //disables createdat and updatedate columns. dont really need these here.
      timestamps: false,
    }
  );

  return Athlete;
};
