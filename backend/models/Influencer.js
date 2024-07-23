import mongoose from "mongoose";

const InfluencerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Influencer = mongoose.model("Influencer", InfluencerSchema);

export default Influencer;
