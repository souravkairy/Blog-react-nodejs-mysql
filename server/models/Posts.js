module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Posts.associate = (models) => {
        Posts.hasMany(models.comments, {
            onDelete: "cascade",
        })
    }
    return Posts
};