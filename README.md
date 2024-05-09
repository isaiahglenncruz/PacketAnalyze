# PacketAnalyze

### Python Script Instructions (Instructions for Web App functionality coming soon)
A simple Python script that reads a WireShark packet capture and writes an analysis to a text file.
Uses the Pyshark library to create a Packet class for each captured packet and iterate 
over each Packet object.

Each packet's packet payload string is accessible through the Packet object's 'data' 
attribute - the script will create an output message to a text file if malicious 
content is found.

Currently in the process of making this simple Python script's functionality into a 
web-based application and adding calls to Generative AI to improve user accessibility.

To run the Python script, first make sure that you have a ```.pcapng``` file that exists 
within the same directory as the script. Make sure that you also already have python 
installed Next, run the following to ensure that you have the Pyshark library installed.

```pip install pyshark```

Now, from the same directory, you may run the Python script by using: 

```python analyze.py file.pcapng```

where ```file.pcapng``` is the name of the WireShark packet capture that you have 
obtained.

# PacketAnalyze Web Application