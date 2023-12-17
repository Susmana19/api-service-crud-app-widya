const db = require("../../helper/connection");

const userModel = {
  get: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT id_user, nama, email, jenis_kelamin FROM users WHERE id_user=${id}`,
        (err, result) => {
          if (err) {
            return reject(err.message);
          } else {
            return resolve(result.rows);
          }
        }
      );
    });
  },
};

module.exports = userModel;
