'use strict';

import Mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  description: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

export default Mongoose.model('User', UserSchema);
