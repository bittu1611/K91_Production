const express = require('express');
const router = express.Router();
const db = require('../config/db');

// POST /api/users - Create user
router.post('/', (req, res) => {
  const { name, email } = req.body;

  // console.log("Received body:", req.body);


  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) return res.status(500).send(err);

    res.status(201).json({ id: result.insertId, name, email });
  });
});

module.exports = router;
