import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			
		},
		id: {
			type: String,
			required: true,
            unique:true
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
        phone: {
			type: String,
			required: true,
			unique: true,
		},
        place: {
			type: String,
			required: true,
		},
		
		
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;