# scrapper
A web scrapper made by using puppeteer with node.js

It can save a full page screenshot of any webpage you wish to save to your local storage, storing under a unique name.

It also has a commented-out part which can be used to target a specific DOM node to only screenshot that part of the page.
  However, there is a hard-coded limit on Chromium webpage height, which can be by-passed by opting for a full page screenshot.
  
In order to use the scrapper, a node server needs to be started. It is assumed you have node installed.

  You can either use the terminal directly from your IDE if that is an option (ctrl-shift-` will open the terminal for VSCode), or start the terminal/powershell from inside the directory which has the scrapper in it.
  
  Once the terminal is active, "$ npm start" without the "" will start the node server, and take a screenshot immediately.
  
  After the server is active, you can simply change the URL, save the app.js, and upon saving the screenshot will be taken automatically. Please allow a few seconds, depending on the webpage size, for the screenshot to be generated.
