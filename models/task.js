module.exports = (sequelize, DataType) => {
  const Tasks = sequelize.define('Tasks', {
    id: { 
      type: DataType.INTERGER,
      primararyKey: true,
      autoIncrement: true
    },
    title: { 
      type: DataType.STRING,
      allowNull: false,
      validate: { 
        notEmpty: true
      }
    },    
  });
};