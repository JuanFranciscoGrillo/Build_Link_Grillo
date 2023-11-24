// utils/helpers.js
module.exports = {
  // Retain your existing helpers
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },

  // Add the extend helper
  extend: function(name, context) {
    const blocks = this._blocks || (this._blocks = {}); // Use _blocks to store block content
    const block = blocks[name] || (blocks[name] = []); // Initialize if not already done

    block.push(context.fn(this)); // Push the block content for later use
  },

  // ... add any other helpers you might need ...
};
