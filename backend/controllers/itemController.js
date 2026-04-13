const db = require("../config/db");

// GET
exports.getItems = (req, res) => {
  db.query(
    "SELECT * FROM items WHERE user_id=?",
    [req.user.id],
    (err, result) => {
      res.json(result);
    }
  );
};

// ADD
exports.addItem = (req, res) => {
  const { title, description } = req.body;

  db.query(
    "INSERT INTO items (user_id,title,description) VALUES (?,?,?)",
    [req.user.id, title, description],
    (err) => {
      res.json({ message: "Item added" });
    }
  );
};

// DELETE
exports.deleteItem = (req, res) => {
  db.query("DELETE FROM items WHERE id=?", [req.params.id], () => {
    res.json({ message: "Deleted" });
  });
};

// UPDATE
exports.updateItem = (req, res) => {
  const { title, description, status } = req.body;

  db.query(
    "UPDATE items SET title=?,description=?,status=? WHERE id=?",
    [title, description, status, req.params.id],
    () => {
      res.json({ message: "Updated" });
    }
  );
};