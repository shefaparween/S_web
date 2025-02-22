const db = require('../config/db');

const submitContact = (req, res) => {
  const { name, email, message } = req.body;

  const query = `
    INSERT INTO contacts (name, email, message)
    VALUES (?, ?, ?)
  `;

  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error submitting contact form:', err);
      res.status(500).json({ message: 'Error submitting form' });
    } else {
      res.status(201).json({ message: 'Contact form submitted successfully' });
    }
  });
};

module.exports = { submitContact };