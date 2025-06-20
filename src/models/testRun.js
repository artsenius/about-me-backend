const mongoose = require('mongoose');

const TestRunSchema = new mongoose.Schema({
    project: { type: String, required: true },
    status: { type: String, required: true },
    startedAt: { type: Date, required: true },
    finishedAt: { type: Date },
    duration: { type: Number }, // in ms
    results: { type: mongoose.Schema.Types.Mixed }, // flexible for test results
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TestRun', TestRunSchema);
