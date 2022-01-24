# Scrapper
A web scrapper made by using puppeteer with node.js

<h2><b>Objective</b></h2> - I was tasked with creating a scrapper that can save the entire web page in an easy-to-use format.

<h2><b>How I did it</b></h2> - Through my research I discovered a tool that did exactly what I needed it to do - Googles Puppeteer, which is a node.js library. After learning how to use npm to start a node server, and setting up Puppeteer, it took some trial and error to get the script to do exactly what I wanted it to do. It waves the web page as png upon running the script, in a format with a unique name. I was also able to target a specific DOM node, however this has unintended side effects if used on large web pages. The full explanation of my work process and how to use the scrapper can be seen in the comments within the app.js.

<h2><b>Greatest challenge</b></h2> - The greatest challenge by far was that this project had a very short deadline - only 1 day. A working solution was required by the end of next day. It was an incredible feat for myself, and a relief, that I was able to learn enough to use a completely unknown tool and produce a working solution in such a short time.

<h2><b>What I learned</b></h2> - Knowing how to phrase my questions when searching Google gave me the solution in a short time. Also, when encountering buggs, having well phrased questions helped me figure out the problem quickly - and it was a problem that was completely unrelated to my code, but was a hard-coded browser issue.


<h2><b>How to use</b></h2>
In order to use the scrapper, a node server needs to be started. It is assumed you have node installed.

  You can either use the terminal directly from your IDE if that is an option (ctrl-shift-` will open the terminal for VSCode), or start the terminal/powershell from inside the directory which has the scrapper in it.
  
  Once the terminal is active, "$ npm start" without the "" will start the node server, and take a screenshot immediately.
  
  After the server is active, you can simply change the URL, save the app.js, and upon saving the screenshot will be taken automatically. Please allow a few seconds, depending on the webpage size, for the screenshot to be generated.
