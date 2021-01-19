'use strict'
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.TEXT,
    validate: {
      notNull: {
        msg: 'Please enter your name'
      }
    }
  }, {})

  author.associate = function(models) {
    // associations can be defined here
    models.author.hasMany(models.article)
  }

  author.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
  }
  return author
}
