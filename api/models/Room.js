import mongoose from 'mongoose';
// const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    maxPrice:{
        type: Number,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    roomNumbers: [{number: Number, unavailableDates: {type: [Date]}}],
},
{ timestamps: true }
)

export default mongoose.model("Room", RoomSchema)