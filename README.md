# PacketAnalyze
A simple Python script that reads a WireShark packet capture and writes an analysis to a text file.
Uses the Pyshark library to create a Packet class for each captured packet and iterate 
over each Packet object.

Each packet's packet payload string is accessible through the Packet object's 'data' 
attribute - the script will create an output message to a text file if malicious 
content is found.