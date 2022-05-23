import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  categoryId: Number,
  children: [
    {
      categoryId: Number,
      children: [
        {
          categoryId: Number,
          children: Array,
          leaf: Boolean,
          name: String,
          var: Boolean,
        },
      ],
    },
  ],
  leaf: Boolean,
  name: String,
  var: Boolean,
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
