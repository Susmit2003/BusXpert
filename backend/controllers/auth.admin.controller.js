import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import bcrypt from "bcryptjs";
import { Admin } from "../models/admin.model.js";

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const admin = await Admin.findOne({ email });
		const isPasswordCorrect = await bcrypt.compare(password, driver?.password || "");

		if (!driver || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid userName or password" });
		}

		generateTokenAndSetCookie(driver._id, res);

		res.status(200).json(driver);
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = async (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};