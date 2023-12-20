import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize(
    process.env.DATABASE_NAME, // Tên database
    process.env.DATABASE_USERNAME, // UserName đăng nhập
    process.env.DATABASE_PASSWORD, // Mật khẩu
    {
        host: process.env.DATABASE_HOOT, // Link hosting database
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection Successfully !');
}).catch((error) => {
    console.error('Connection Error: ', error);
});

export default sequelize;