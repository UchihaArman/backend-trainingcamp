    const mongoose = require('mongoose');

    const groupSchema = new mongoose.Schema({
        name: { type: String, required: true },
        initialPoints: { type: Number, required: true },
        points: { type: Number, default: 0 },
        members: { type: [String], default: [] }
    });

    module.exports = mongoose.model('Group', groupSchema);