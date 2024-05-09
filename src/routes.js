const express = require('express');
const router = express.Router();
const pcapAnalyzer = require('./pcapAnalyzer');

router.post('/upload', (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const pcapFile = req.files.file;

  pcapAnalyzer.analyze(pcapFile.path, (result) => {
    res.status(200).json({ result: result });
  });
});

module.exports = router;
