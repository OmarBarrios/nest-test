import 'dotenv/config';

interface Env {
  PORT: string;
  NODE_ENV: string;
  MONGODB_HOST: string;
  MONGODB_USER: string;
  MONGODB_PASS: string;
  MONGODB_NAME: string;
  MONGODB_ARGS: string;
  VERIFY_URL: string;
  CLIENT_ID: string;
  AUTHORIZATION: string;
}

export const env: Env = {
  PORT: process.env.PORT ?? '3000',
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  MONGODB_HOST: process.env.MONGODB_HOST ?? '',
  MONGODB_USER: process.env.MONGODB_USER ?? '',
  MONGODB_PASS: process.env.MONGODB_PASS ?? '',
  MONGODB_NAME: process.env.MONGODB_NAME ?? 'test',
  MONGODB_ARGS: process.env.MONGODB_ARGS ?? '',
  VERIFY_URL: process.env.VERIFY_URL ?? '',
  CLIENT_ID: process.env.CLIENT_ID ?? '',
  AUTHORIZATION: process.env.AUTHORIZATION ?? '',
};
