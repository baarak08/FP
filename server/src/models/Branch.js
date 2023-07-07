module.exports = (sequelize, Sequelize) => {
  const Branch = sequelize.define("Branches", {
    branch_name: Sequelize.STRING,
    branch_address: Sequelize.STRING,
    longitude: Sequelize.STRING,
    latitude: Sequelize.STRING,
  });
  return Branch;
};