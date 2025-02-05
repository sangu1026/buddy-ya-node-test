const db = require('../config/db');

exports.getAllStudents = (callback) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

exports.getStudentById = (id, callback) => {
    db.query('SELECT * FROM students WHERE id = ?', [id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result[0]);
    });
};