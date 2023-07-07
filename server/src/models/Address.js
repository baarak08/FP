module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("Address", {
    user_address: Sequelize.STRING,
    longitude: Sequelize.STRING,
    latitude: Sequelize.STRING,
  });
  return Address;
};
