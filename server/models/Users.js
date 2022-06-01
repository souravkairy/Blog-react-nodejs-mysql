module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
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

    Users.associate = (models) => {
        Users.hasMany(models.comments, {
            onDelete: "cascade",
        })
    }
    return Users
};