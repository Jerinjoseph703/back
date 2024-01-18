// db.js
import mongoose from 'mongoose';

const mongoUrl = 'mongodb+srv://gauthamsajus686:2003@cluster0.btg6bil.mongodb.net/realestate?retryWrites=true&w=majority';

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose;
