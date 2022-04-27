import { DataSource } from 'typeorm';

/**
 * use MySQL
 */
const connectDatabase = () => {
  const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_ID,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: [],
  });

  return dataSource;
};

export default connectDatabase;
