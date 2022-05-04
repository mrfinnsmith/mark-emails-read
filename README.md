## What this does
Do you ever get anxious that you have too many unread emails with certain labels? Well, this code will fix it! (If you use Gmail.)

The language here is Javascript, and the code runs within the [Google Apps Script](https://developers.google.com/apps-script) IDE. 

### How to use (with git):
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

### How to use (copy and paste):
1. Create a [new Google Apps Script file](https://script.new/)
1. Copy the contents of markEmailsRead.js into the Code.gs file and save.
1. Create a new Script file (by clicking the plus sign on the left). Paste in the contents of config.template.json.
1. Update the values as needed in the new file you've just created.
1. Run the main() function. You can set up [a trigger](https://developers.google.com/apps-script/guides/triggers) to have it run every day.

### Script ID
Every Google Apps Script project has a unique script ID. The [clasp site](https://developers.google.com/apps-script/guides/clasp) has some details on where to get it for your new project. This is how GAS knows which script file to update, so it won't sync if you don't fill this in. Add the script ID in .clasp.json where it says "Your script ID goes here."

### Path to your project
The .clasp.json file needs to know where to look for this project on your computer. If you're on a Mac or Linux computer, run `pwd` in the terminal. Fill this in .clasp.json where it says "The path to the directory for this project goes here."

### Things to know
* The files on your computer will have the .js extension. When you run `clasp push`, they'll be converted to .gs in the GAS IDE. Leave them as .js on your computer for easier formatting. There's no need to correct the extension.
* You may have noticed that the config.js/gs template is called config.template.json before copying. You can't push anything with clasp other than .js/.gs and .html files, so this allows you to make a copy (into config.js/gs) and push just that. Likewise, the README will not be pushed to the GAS IDE because it has a .md extension.
* If you move this project to another place on your computer, you'll have to update the rootDir in .clasp.json. Otherwise, clasp will look for the project at the old location and will fail.