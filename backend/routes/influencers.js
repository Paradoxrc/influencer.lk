import express from "express";
import Influencer from "../models/influencer.js";
import bcrypt from "bcrypt";
import infData from "../models/infData.js";


const router = express.Router();

// UPDATE
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id) {
    
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
        const updatedInfluencer = await Influencer.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedInfluencer);
      
    } catch (err) {
        res.status(500).json(err);
    }
    } else {
        res.status(401).json("You can update only your account!");
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id) {
        try {
            const user = await Influencer.findById(req.params.id);
            try {
                await infData.deleteMany({username: user.username});
                await Influencer.findByIdAndDelete(req.params.id);
                res.status(200).json("Influencer has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(404).json("Influencer not found!");
        }
    } else {
        res.status(401).json("You can delete only your account!");
    }
});

// GET
router.get("/:id", async (req, res) => {
    try {
        const influencer = await Influencer.findById(req.params.id);
        const { password, ...others } = influencer._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;
