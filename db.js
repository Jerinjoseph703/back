// db.js
import mongoose from 'mongoose';

const mongoUrl = 'mongodb+srv://realestate:realestate@realestate.5err2ql.mongodb.net/RealEstate?retryWrites=true&w=majority';

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose;
