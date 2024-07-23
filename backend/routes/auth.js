import express from "express";
import Influencer from "../models/influencer.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newInfluencer = new Influencer({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const savedInfluencer = await newInfluencer.save();
        res.status(200).json(savedInfluencer);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await Influencer.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json("Wrong credentials!");
        }
        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) {
            return res.status(401).json("Wrong credentials!");
        }

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;
