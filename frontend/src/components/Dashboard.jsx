import { useEffect, useState, useContext } from "react";
import { getItems, addItem, deleteItem, updateItem } from "../api/itemApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchItems = async () => {
    try {
      const res = await getItems();
      const data = Array.isArray(res.data)
        ? res.data
        : res.data.items || [];
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async () => {
    if (!title || !description) return;

    await addItem({ title, description });
    setTitle("");
    setDescription("");
    fetchItems();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  // ✏️ START EDIT
  const startEdit = (item) => {
    setEditId(item._id || item.id);
    setEditTitle(item.title);
    setEditDescription(item.description);
  };

  // 💾 SAVE EDIT
  const handleUpdate = async () => {
    await updateItem(editId, {
      title: editTitle,
      description: editDescription,
    });

    setEditId(null);
    fetchItems();
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-purple-600"> Dashboard</h2>

        <button
          onClick={handleLogout}
          className="bg-pink-400 hover:bg-pink-300 text-white px-5 py-2 rounded-full"
        >
          Logout
        </button>
      </div>

      {/* ADD */}
      <div className="bg-white/70 p-6 rounded-2xl shadow mb-8 flex gap-3">
        <input
          className="p-3 rounded-xl border flex-1"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="p-3 rounded-xl border flex-1"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-purple-500 text-white px-6 rounded-xl"
        >
          Add
        </button>
      </div>

      {/* ITEMS */}
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => {
          const id = item._id || item.id;

          return (
            <div
              key={id}
              className="bg-white/80 p-5 rounded-2xl shadow"
            >
              {editId === id ? (
                <>
                  {/* EDIT MODE */}
                  <input
                    className="p-2 border rounded w-full mb-2"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <input
                    className="p-2 border rounded w-full mb-2"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />

                  <div className="flex gap-2">
                    <button
                      onClick={handleUpdate}
                      className="bg-green-300 px-3 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="bg-gray-300 px-3 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* NORMAL VIEW */}
                  <h3 className="font-bold text-purple-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>

                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => startEdit(item)}
                      className="bg-pink-300 px-3 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(id)}
                      className="bg-blue-300 px-3 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}