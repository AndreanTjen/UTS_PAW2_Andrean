const mongoose = require('mongoose');

const andreanSchema = new mongoose.Schema(
    {
        pemandu: {
            type: String, required: true
        },
        tujuan: {
            type: String, required: true
        },
        destinasi: {
            type: String, required: true
        }
    }
);

module.exports = mongoose.model('Andrean', andreanSchema);
