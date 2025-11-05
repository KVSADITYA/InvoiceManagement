import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api/invoices",
});

export const getInvoices = () => API.get("/");
export const addInvoice = (data) => API.post("/", data);
export const updateInvoice = (id, data) => API.put(`/${id}`, data);
export const deleteInvoice = (id) => API.delete(`/${id}`);
export const bulkDelete = (ids) => API.post("/bulk-delete", { ids });
