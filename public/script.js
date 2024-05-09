document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const analysisResult = document.getElementById('analysisResult');
  
    uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);
  
      fetch('/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(message => { // upload success
        console.log(message);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
    });
  
    // Listen for analysis result event
    document.addEventListener('analysisResult', (e) => {
      const result = e.detail;
      analysisResult.value = result;
    });
  });
  