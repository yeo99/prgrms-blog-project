'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 댓글은 하나의 포스트에 속함
      Comment.belongsTo(models.Post, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE',
      });
    }
  }

  // 필드 정의
  Comment.init(
    {
      post_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password_hash: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments', // 테이블 이름 명시
      timestamps: true, // createdAt, updatedAt 필드 자동 생성 비활성화
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return Comment;
};
