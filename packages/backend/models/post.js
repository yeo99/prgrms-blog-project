'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 1:N 관계 설정 (하나의 포스트에 여러 댓글이 달림)
      Post.hasMany(models.Comment, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE'
      });
    }
  }
  
  // 필드 정의
  Post.init({
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
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',  // 테이블 이름 명시
    timestamps: false,   // createdAt, updatedAt 필드 자동 생성 비활성화
  });

  return Post;
};
