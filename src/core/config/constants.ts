import './loadenv';

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export const CWD = process.cwd();
export const LOG_PATH = `${CWD}/src/logs`;
export const SRC_PATH = `${CWD}/src`;

export const PORT = process.env.PORT || '';
export const BASE_URL = process.env.BASE_URL || '';
export const COOKIE_SECRET = process.env.COOKIE_SECRET || '';
export const JWT_SECRET = process.env.JWT_SECRET || '';
export const MONGODB_URI = process.env.MONGODB_URI || '';

export const PROJECT_ID = process.env.PROJECT_ID || '';
export const PRIVATE_KEY_ID = process.env.PRIVATE_KEY_ID || '';
export const PRIVATE_KEY = process.env.PRIVATE_KEY
  ? `${process.env.PRIVATE_KEY.replace(/\\n/g, '\n')}`
  : '';
export const CLIENT_EMAIL = process.env.CLIENT_EMAIL || '';
export const CLIENT_ID = process.env.CLIENT_ID || '';
export const AUTH_URI = process.env.AUTH_URI || '';
export const TOKEN_URI = process.env.TOKEN_URI || '';
export const AUTH_PROVIDER_X509_CERT_URL =
  process.env.AUTH_PROVIDER_X509_CERT_URL || '';
export const AUTH_X509_CERT_URL = process.env.AUTH_X509_CERT_URL || '';
export const DATABASE_URL = process.env.DATABASE_URL || '';

// DATABASE CONFIG
export const DEVICES_REF = process.env.DEVICES_REF;
export const USER_DEVICES_REF = process.env.USER_DEVICES_REF;
export const USERS_REF = process.env.USERS_REF;
export const DEVICE_ANALYTICS_REF = process.env.DEVICE_ANALYTICS_REF;
