const type = process.env.TYPEORM_TYPE || 'postgres';
const username = process.env.TYPEORM_USERNAME || 'waknzqjojaptve';
const password = process.env.TYPEORM_PASSWORD || '090968863573cd88e5b39d0600e998b3a3724dd204dc0bf0b69159bd26736ce5';
const host = process.env.TYPEORM_HOST || 'ec2-52-213-167-210.eu-west-1.compute.amazonaws.com';
const port = parseInt(process.env.TYPEORM_PORT, 10) || 5432;
const database = process.env.TYPEORM_DATABASE || 'd7ovr9jt5t8iht';

module.exports = {
  type,
  url:
    process.env.DATABASE_URL ||
    `${type}://${username}:${password}@${host}:${port}/${database}`,
  entities: [
    process.env.NODE_ENV === 'test'
      ? 'src/entity/**/*.ts'
      : 'build/entity/**/*.js',
  ],
  migrations: [
    process.env.NODE_ENV === 'test'
      ? 'src/migration/**/*.ts'
      : 'build/migration/**/*.js',
  ],
  cli: {
    entitiesDir:
      process.env.NODE_ENV === 'test' ? 'src/entity' : 'build/entity',
    migrationsDir:
      process.env.NODE_ENV === 'test' ? 'src/migration' : 'build/migration',
  },
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false
  }
  // ssl:true,
};
