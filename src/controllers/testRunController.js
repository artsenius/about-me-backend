const TestRun = require('../models/testRun');

exports.getTestRuns = async (req, res) => {
    try {
        const testRuns = await TestRun.find().sort({ startedAt: -1 });
        res.json(testRuns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createTestRun = async (req, res) => {
    try {
        const testRun = new TestRun(req.body);
        await testRun.save();
        res.status(201).json(testRun);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
