const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  url: { type: String, required: true },
  likes: { type: Number, default: 0 },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comments',
  },
});


blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    /* eslint-disable no-param-reassign, no-underscore-dangle */
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    /* eslint-enable no-param-reassign, no-underscore-dangle */
  },
});

module.exports = mongoose.model('Blog', blogSchema);
