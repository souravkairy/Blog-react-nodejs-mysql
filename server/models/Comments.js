module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("comments", {
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Comments
};