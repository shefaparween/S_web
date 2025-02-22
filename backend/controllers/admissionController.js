const db = require('../config/db');

const submitAdmission = (req, res) => {
  const { studentName, parentName, email, phone, grade, dob, address, message } = req.body;

  const query = `
    INSERT INTO admissions (student_name, parent_name, email, phone, grade, dob, address, message)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [studentName, parentName, email, phone, grade, dob, address, message],
    (err, result) => {
      if (err) {
        console.error('Error submitting admission form:', err);
        res.status(500).json({ message: 'Error submitting form' });
      } else {
        res.status(201).json({ message: 'Admission form submitted successfully' });
      }
    }
  );
};

module.exports = { submitAdmission };