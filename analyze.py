import sys
import pyshark
from datetime import datetime

def analyze_pcap(file_path):
    cap = pyshark.FileCapture(file_path)

    suspicious_ips = set()
    dangerous_patterns = ['attack', 'malware', 'exploit', 'virus']
    current_datetime = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    output_file = f"Dangerous_Patterns_{current_datetime}.txt"

    with open(output_file, 'w') as f:
        malicious_found = False
        for packet in cap: # iterating over entire capture
            if 'data' in packet:
                payload = str(packet.data).lower()
                for pattern in dangerous_patterns:
                    if pattern in payload:
                        output_msg = f"Dangerous pattern '{pattern}' found in packet: {packet}\n"
                        f.write(output_msg)
                        print(output_msg)
                        malicious_found = True

        if not malicious_found:
            no_malicious_msg = f"No malicious content found in capture {file_path}\n"
            f.write(no_malicious_msg)
            print(no_malicious_msg)
        else:
            danger_msg = f"DANGER FOUND - CHECK {output_file}"
            print(danger_msg)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python analyze.py <pcapng_file>")
        sys.exit(1)

    pcap_file_path = sys.argv[1]
    analyze_pcap(pcap_file_path)