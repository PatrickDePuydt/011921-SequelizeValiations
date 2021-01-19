# Sequelize Validations
https://sequelize.org/master/manual/getting-started.html

## Installation

```
npm install --save sequelize # Install sequelize
npm install --save pg pg-hstore # Install Postgres
```
---

# What is Sequelize
> Aka **"Model validators"**
Ways of protecting database data types... 
Not to be confused with Constraints
Model validators allow you to specify format/content/inheritance validations for each attribute of the model.

## What are different types of validations?
1. custom/arbitrary
1. built-in

## Which ones could be useful?
`notEmpty`, `isEmail`, `isAlphanumeric`, `notContains`
## How do we use validations in sequelize?

```js
class User extends Model {}
User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your name'
      },
      notEmpty: {
        msg: 'Can\'t be empty'
      },
    }
  }
}, { sequelize });
```