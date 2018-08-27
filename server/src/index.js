const admin = require("firebase-admin");

const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://write-for-christ.firebaseio.com"
});

const db = admin.database();

const getGospel = () => {
  return new Promise((resolve, reject) => {
    const gospelRef = db.ref("/gospel");
    const gospelFetch = gospelRef.once("value", snapshot => {
      const result = snapshot.val();
      resolve(result);
    });
  });
};

module.exports = { getGospel };
