const pcap = require('pcap-parser');

const pcapAnalyzer = {
  analyze: (file_path) => {
    return new Promise((resolve, reject) => {
      const cap = pcap.parse(file_path);

      let analysis_result = '';

      cap.on('error', (err) => {
        console.error('Error during pcap parsing:', err);
        reject('Error during pcap parsing');
      });

      cap.on('packet', (packet) => {
        if (packet.payload) {
          const payload = packet.payload.toString('utf8').toLowerCase();
          const dangerous_patterns = ['attack', 'malware', 'exploit', 'virus'];
          for (const pattern of dangerous_patterns) {
            if (payload.includes(pattern)) {
              analysis_result += `Dangerous pattern '${pattern}' found in packet: ${packet}\n`;
            }
          }
        }
      });

      cap.on('end', () => {
        if (analysis_result === '') {
          analysis_result = `No malicious content found in capture ${file_path}\n`;
        } else {
          analysis_result += 'DANGER FOUND - CHECK THE PACKETS ABOVE';
        }
        resolve(analysis_result);
      });
    });
  }
};

module.exports = pcapAnalyzer;
