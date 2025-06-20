const TestRun = require('../models/testRun');

exports.getTestRuns = async (req, res) => {
    try {
        const testRuns = await TestRun.find().sort({ startedAt: -1 });
        res.json(testRuns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTestRunsSummary = async (req, res) => {
    try {
        const testRuns = await TestRun.find()
            .select('project status startedAt finishedAt _id results.passed results.failed')
            .sort({ startedAt: -1 });
        res.json(testRuns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTestRunById = async (req, res) => {
    try {
        const testRun = await TestRun.findById(req.params.id);
        if (testRun) {
            res.json(testRun);
        } else {
            res.status(404).json({ message: 'Test run not found' });
        }
    } catch (err) {
        if (err.kind === 'ObjectId') {
            res.status(400).json({ message: 'Invalid test run ID format' });
        } else {
            res.status(500).json({ message: err.message });
        }
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
