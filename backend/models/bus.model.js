import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  busNumber: {
    type: String,
    required: true,
    unique: true
  },
  route: {
    type: Array,
    default:[],
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  currentLocation: {
    type: {
      latitude: {
        type: Number,
        required: true
      },
      longitude: {
        type: Number,
        required: true
      },
    },
    required: true
  },
  status: {
    type: String,
    enum: ['running', 'maintenance', 'stopped'],
    default: 'stopped'
  },
},{ timestamps: true });

export const Bus = mongoose.model('Bus', busSchema);

