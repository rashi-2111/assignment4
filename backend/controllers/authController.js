const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [name, email, hash],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "User registered successfully" });
    }
  );
};

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, result) => {
      if (result.length === 0)
        return res.json({ message: "User not found" });

      const user = result[0];

      const match = await bcrypt.compare(password, user.password);

      if (!match) return res.json({ message: "Wrong password" });

      const token = jwt.sign({ id: user.id }, "secret");

      res.json({ token });
    }
  );
};

// FORGOT PASSWORD
exports.forgotPassword = (req, res) => {
  const { email } = req.body;

  const token = Math.random().toString(36).substring(2);

  db.query(
    "UPDATE users SET reset_token=? WHERE email=?",
    [token, email],
    (err) => {
      if (err) return res.json(err);

      res.json({
        message: "Reset link generated",
        token, // for testing
      });
    }
  );
};

// RESET PASSWORD
exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  db.query(
    "UPDATE users SET password=?, reset_token=NULL WHERE reset_token=?",
    [hash, token],
    (err) => {
      if (err) return res.json(err);

      res.json({ message: "Password updated" });
    }
  );
};