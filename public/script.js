document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const loading = document.getElementById('loading');
  
    uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      console.log("File input:", fileInput.files); // debugging 
  
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);
  
      console.log("FormData:", formData); // debugging 
  
      loading.style.display = 'block'; // showing loading
  
      fetch('/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(message => { // hide loading, display success
        loading.style.display = 'none';
        console.log(message);
      })
      .catch(error => { // hide loading indicator
        loading.style.display = 'none';
        console.error('Error uploading file:', error);
      });
    });
  
    document.addEventListener('analysisResult', (e) => {
      const result = e.detail;
      analysisResult.value = result;
    });
  });
