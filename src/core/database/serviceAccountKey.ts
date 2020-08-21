import {
  PROJECT_ID,
  PRIVATE_KEY_ID,
  PRIVATE_KEY,
  CLIENT_EMAIL,
  CLIENT_ID,
  AUTH_URI,
  TOKEN_URI,
  AUTH_PROVIDER_X509_CERT_URL,
  AUTH_X509_CERT_URL,
} from '@config/constants';

export const serviceAccountKey = {
  type: 'service_account',
  projectId: PROJECT_ID,
  privateKeyId: PRIVATE_KEY_ID,
  privateKey: PRIVATE_KEY,
  clientEmail: CLIENT_EMAIL,
  clientId: CLIENT_ID,
  authUri: AUTH_URI,
  tokenUri: TOKEN_URI,
  authProviderX509CertUrl: AUTH_PROVIDER_X509_CERT_URL,
  clientC509CertUrl: AUTH_X509_CERT_URL,
};
