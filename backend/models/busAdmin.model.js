import mongoose from "mongoose";

const busAdminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    employeeId: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bus: {
        type: mongoose.Types.ObjectId,
        ref: "Bus"
    },
    phoneNo: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export const BusAdmin = mongoose.model("BusAdmin",busAdminSchema)
