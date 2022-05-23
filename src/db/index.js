import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect(process.env.MDB_URL)
    .then(() => {
      console.log('DB connected successfully');
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default connect;
