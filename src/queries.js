// Return all items from the database
const getAllItems = async () => {};

// Return an item that matches the id
const getItemById = async (id) => {};

// Return items with a status "D"
const getDamagedItems = async () => {};

// Return items with a status "A" and qty less than 30
const getLowStockItems = async () => {};

module.exports = {
  getAllItems,
  getItemById,
  getDamagedItems,
  getLowStockItems,
};
