/* eslint-disable comma-dangle */
import axios from 'axios';

import { Category } from '../model/index';
import APIFeatures from '../utils';

export default {
  getCategoryTree: async (req, res) => {
    try {
      const response = await axios({
        url: 'https://api.sellercenter.daraz.pk?Action=GetCategoryTree&Format=json&Timestamp=2022-05-23T08%3A12%3A47%2B00%3A00&UserID=muhammadarslan6492%40gmail.com&Version=1.0&Signature=e4b3d2afa8e64ccb639a625e3940ccc96fab85e515e7a6166ece713f7aa09e97',
        method: 'get',
      });
      const category = await Promise.all(
        response.data.SuccessResponse.Body.map(async (item) => {
          const insertedData = await Category.create(item);
          return insertedData;
        })
      );
      return res.status(200).json(category);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  categories: async (req, res) => {
    try {
      const features = new APIFeatures(Category.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const category = await features.query;
      return res.status(200).json(category);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  categoryById: async (req, res) => {
    try {
      const category = await Category.findOne({
        categoryId: req.params.categoryId,
      });
      return res.status(200).json(category);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  dropDb: async (req, res) => {
    try {
      await Category.deleteMany();
      return res.status(200).json({ msg: 'Category model drop successfully' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
