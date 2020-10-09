import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/playgame', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;