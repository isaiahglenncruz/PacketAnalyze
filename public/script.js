document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const loading = document.getElementById('loading');
    const analysisResult = document.getElementById('analysisResult');

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        loading.style.display = 'block'; // show loading

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            loading.style.display = 'none'; 
            analysisResult.value = data.result || "No malicious content found in capture.";
        })
        .catch(error => {
            loading.style.display = 'none';
            console.error('Error uploading file:', error); 
            analysisResult.value = 'Error uploading file. Please try again.'; 
        });
    });
});



  
document.addEventListener('analysisResult', (e) => {
      const result = e.detail;
      console.log("Analysis Result:", result);
      analysisResult.value = result || "No malicious content found in capture.";
});
  