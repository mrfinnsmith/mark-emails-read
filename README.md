This script will find any Gmail messages with the selected label that were received before the selected time period and mark them as read.

How to use:
1. install [clasp](https://developers.google.com/apps-script/guides/clasp)
1. `git clone https://github.com/mrfinnsmith/markEmailsRead`
1. `cd markEmailsRead`
1. `cp config.template.json config.js`
1. Update the values as needed in config.js.
1. Create a [new Google Apps Script file](https://script.new/)
1. `cp .clasp.template.json .clasp.json`
1. Fill in the script ID (see below) in .clasp.json from your new Script file.
1. Fill in the path to your instance of this project in .clasp.json (see below).
1. `clasp push` (If prompted, enter y to update the manifest)
1. Refresh the page on your script project. You should see all the .js files as .gs. Run the main() function. You can set up [a trigger](https://developers.google.com/apps-script/guides/triggers) to have it run every day.


### Script ID
Every Google Apps Script project has a unique script ID. The [clasp site](https://developers.google.com/apps-script/guides/clasp) has some details on where to get it for your new project. This is how GAS knows which script file to update, so it won't sync if you don't fill this in. Add the script ID in .clasp.json where it says "Your script ID goes here."

### Path to your project
The .clasp.json file needs to know where to look for this project on your computer. If you're on a Mac or Linux computer, run `pwd` in the terminal. Fill this in .clasp.json where it says "The path to the directory for this project goes here."