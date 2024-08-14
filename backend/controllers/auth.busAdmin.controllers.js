import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import bcrypt from "bcryptjs";
import { BusAdmin } from "../models/busAdmin.model.js";

export const signup = async (req, res) => {
	try {
		const busAdminDetails = req.body;
		const existingbusAdmin = await BusAdmin.findOne({employeeId:busAdminDetails.employeeId});
		if (existingbusAdmin) {
			return res.status(400).json({ error: "employeeId is already taken" });
		}

		if (busAdminDetails.password.length < 6) {
			return res.status(400).json({ error: "Password must be at least 6 characters long" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(busAdminDetails.password, salt);
		busAdminDetails.password = hashedPassword
		const newbusAdmin = new BusAdmin(busAdminDetails);

		if (newbus) {
			generateTokenAndSetCookie(newbusAdmin._id, res);
			await newbusAdmin.save();

			res.status(201).json(newbusAdmin);
		} else {
			res.status(400).json({ error: "Invalid BusAdmin data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({error: "Internal Server Error" });
	}
};

export const login = async (req, res) => {
	try {
		const { employeeId, password } = req.body;
		const busAdmin = await BusAdmin.findOne({ employeeId });
		const isPasswordCorrect = await bcrypt.compare(password, busAdmin?.password || "");

		if (!BusAdmin || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid userName or password" });
		}

		generateTokenAndSetCookie(busAdmin._id, res);

		res.status(200).json(busAdmin);
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