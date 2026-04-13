import API from "./axios";

// ✅ GET ALL ITEMS
export const getItems = async () => {
  return await API.get("/items");
};

// ✅ ADD ITEM
export const addItem = async (data) => {
  return await API.post("/items", data);
};

// ✅ DELETE ITEM
export const deleteItem = async (id) => {
  return await API.delete(`/items/${id}`);
};

// ✅ UPDATE ITEM
export const updateItem = (id, data) => {
  return axios.put(`/api/items/${id}`, data);
};