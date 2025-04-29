module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      imageUrl: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    });
    return Item;
  };
  