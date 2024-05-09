const express = require('express');
const router = express.Router();
const pcapAnalyzer = require('./pcapAnalyzer');

router.post('/upload', (req, res) => { // file upload + analyze
  if (!req.files || !req.files.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const pcapFile = req.files.file;

  // analyze function from pcapAnalyzer module
  pcapAnalyzer.analyze(pcapFile.path);
  
  res.send('Analysis started. Check the web page for results.');
});

module.exports = router;
