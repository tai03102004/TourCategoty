import {DataTypes} from "sequelize"

import sequelize from "../config/database";

const Tour = sequelize.define("Tour",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Tự động tăng id
        allowNull: false, // ko đc để NULL
        primaryKey: true, // id : Khoá chính
    }, 
    title: {
        type: DataTypes.STRING(255),
        allowNull: false, 
    } ,
    code :{
        type: DataTypes.STRING(10),
    } ,
    images: {
        type: DataTypes.TEXT('long')
    },
    price : {
        type: DataTypes.INTEGER,
    },
    discount: {
        type: DataTypes.INTEGER,
    },
    information : {
        type : DataTypes.TEXT('long'),
    },
    schedule: {
        type: DataTypes.TEXT('long'),
    },
    timeStart : {
        type : DataTypes.DATE,
    },
    stock : { // SỐ lượng còn lại
        type: DataTypes.INTEGER,
    },
    status : {
        type: DataTypes.STRING(20),
    },
    position: { // Vị trí tour
        type: DataTypes.INTEGER,
    },
    slug: { // Tiêu đề ko để null
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Mặc định là chưa xoá các tour
    },
    deletedAt :{
        type: DataTypes.DATE,
    }
},{
    tableName : "tours", // KẾt nối đến bảng trong dataBase
    timestamps: true ,// Tự động quản lý createdAt, updateAt
});

export default Tour;