This is a sample Electron app that calls a python script and displays its result.

Files
---
_**index.html**_ - the main html file  
_**script.js**_ - the script file referenced by _index.html_  
_**test.py**_ - a python script to be called by the Electron app  
_**main.js**_ - the config script for the Electron app

Prerequisites
---
* Node.js installed.
* Python3 installed (only for running test.py).

Steps to Run
---
* In this directory, run
  ```
  npm i
  ```
* In this directory, run
  ```
  npx electron .
  ```
  If _npx_ does not exist, it might be installed with (for Linux, _sudo_ could be required)
  ```
  npm i -g npx
  ```
