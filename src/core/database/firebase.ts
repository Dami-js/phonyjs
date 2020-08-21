import admin from 'firebase-admin';
import {
  DATABASE_URL,
  DEVICES_REF,
  USER_DEVICES_REF,
  USERS_REF,
  DEVICE_ANALYTICS_REF,
} from '@config/constants';
import { serviceAccountKey } from './serviceAccountKey';
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: DATABASE_URL,
});

const fbdb = admin.database();
const devicesRef = fbdb.ref(DEVICES_REF);
const userDevicesRef = fbdb.ref(USER_DEVICES_REF);
const usersRef = fbdb.ref(USERS_REF);
const deviceAnalyticsRef = fbdb.ref(DEVICE_ANALYTICS_REF);

export { fbdb, devicesRef, userDevicesRef, usersRef, deviceAnalyticsRef };
