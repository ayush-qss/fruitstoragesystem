const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose.connect(
    'mongodb+srv://ayush:ayush@todoappnodeexpress.ipbsj.mongodb.net/FruitStorageSystem?retryWrites=true&w=majority'
  );
};
