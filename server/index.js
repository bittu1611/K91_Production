const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Assuming this connects to MySQL
const userRoutes = require('./routes/users');

const app = express();
const port = 5000;

// ✅ Apply Middlewares FIRST
app.use(cors());
app.use(express.json());

// ✅ Setup Routes AFTER middleware
app.use('/api/users', userRoutes);

// ✅ Test Route
app.get('/api/message', (req, res) => {
  res.json({ message: '' });
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
