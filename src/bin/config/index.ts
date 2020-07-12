import "./loadenv";

export const PORT = process.env.PORT || "";
export const BASE_URL = process.env.BASE_URL || "";
export const COOKIE_SECRET = process.env.COOKIE_SECRET || "";
export const JWT_SECRET = process.env.JWT_SECRET || "";
export const MONGODB_URI = process.env.MONGODB_URI || "";

export const PROJECT_ID = process.env.PROJECT_ID || "";
export const PRIVATE_KEY_ID = process.env.PRIVATE_KEY_ID || "";
export const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
export const CLIENT_EMAIL = process.env.CLIENT_EMAIL || "";
export const CLIENT_ID = process.env.CLIENT_ID || "";
export const AUTH_URI = process.env.AUTH_URI || "";
export const TOKEN_URI = process.env.TOKEN_URI || "";
export const AUTH_PROVIDER_X509_CERT_URL =
  process.env.AUTH_PROVIDER_X509_CERT_URL || "";
export const AUTH_X509_CERT_URL = process.env.AUTH_X509_CERT_URL || "";
export const DATABASE_URL = process.env.DATABASE_URL || "";

export default () => {};
