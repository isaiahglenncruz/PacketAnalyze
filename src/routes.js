const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const pcapAnalyzer = require('./pcapAnalyzer');

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No file uploaded');
    }

    const pcapFile = req.file.path;
    const result = await pcapAnalyzer.analyze(pcapFile);
    res.status(200).json({ result: result });
  } catch (error) {
    console.error('Error during file upload and analysis:', error);
    res.status(500).json({ error: 'An error occurred during analysis' });
  }
});

module.exports = router;
