/**
 * Created by placeless on 17/4/16.
 */
import db from '../../database/drivers/mongodb'
import mongoose from 'mongoose';
let Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {type: String, required: true},
  date: {type: Date, default: Date.now()}
});


const User = db.model('User', UserSchema);

export default User;
