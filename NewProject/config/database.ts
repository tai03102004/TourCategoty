import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'tour_management', // Tên database
    'root', // UserName đăng nhập
    'tai03102004', // Mật khẩu
    {
        host: 'localhost', // Link hosting
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection successfully.');
}).catch((error) => {
    console.error('Connection error: ', error);
});

export default sequelize;