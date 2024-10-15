module.exports = {
  HOST: "localhost",
  USER: "Sampleuser1",
  PASSWORD: "sampleuser",
  DB: "athletes",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
