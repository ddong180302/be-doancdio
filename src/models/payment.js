'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.Order, { foreignKey: 'order_id', as: 'data_payment' })
    }
  };
  Payment.init({
    order_id: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    status: DataTypes.STRING,
    deleted_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};