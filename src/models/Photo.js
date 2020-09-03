import Sequelize, { Model } from 'sequelize'

export default class StudentsPhoto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'cannot be null',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'cannot be null',
          },
        },
      },
      student_id: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'age must be a integer number',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'students_photo',
      modelName: 'Students_photo',
    })
    return this
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' })
  }
}