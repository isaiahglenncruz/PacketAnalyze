# PacketAnalyze
PacketAnalyze was developed with allowing the user to have a personal application for 
conducting analysis of Packet Captures done through WireShark. There are many websites 
that allow users to use this functionality, but it may feel difficult for new users 
to trust the Internet, especially with the vast amount of websites designed for 
data mining and other malicious purposes.

I designed PacketAnalyze to provide a user with a personal packet-analysis service, 
to ease any anxiety about the unpredictability of the Internet. I am currently in the 
process of increasing this Python Script and Web App functionality so that both 
interfaces will be able to provide explanations of packet analyses backed by Generative AI.

### Python Script Instructions (Instructions for Web App functionality coming soon)
A simple Python script that reads a WireShark packet capture and writes an analysis to a text file.
Uses the Pyshark library to create a Packet class for each captured packet and iterate 
over each Packet object.

Each packet's packet payload string is accessible through the Packet object's 'data' 
attribute - the script will create an output message to a text file if malicious 
content is found.

Ensure that you have a version of Python installed on your system.
To run the Python script, first make sure that you have a ```.pcapng``` file that exists 
within the same directory as the script. Make sure that you also already have python 
installed Next, run the following to ensure that you have the Pyshark library installed.

```pip install pyshark```

Now, from the same directory, you may run the Python script by using: 

```python analyze.py file.pcapng```

where ```file.pcapng``` is the name of the WireShark packet capture that you have 
obtained.

# PacketAnalyze Web Application

### Dependencies Required
First, ensure that you have a version of Node.js installed on your system. Clone this 
repository to a location of your choice, and use

```npm install```

To install the required dependencies outlined in ```package.json```.

```node server.js```

will start the application on http://localhost:3000

![captureproof](https://github.com/isaiahglenncruz/PacketAnalyze/assets/72627685/e41ad3f8-1633-48b3-97af-35812d5c6b6b)
