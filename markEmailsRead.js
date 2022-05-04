/*
What this is:
Values of targetLabelNames and oldEmailDefinition are configurable in config.js/gs. 

Gmail nested labels are named with the parent label, then "/", then the child label. So if you make one of your targetLabelNames 'newsletter,' this script will find any email labeled 'newsletter,' as well as anything labeled 'newsletter/fun' or 'newsletter/local.'
 */


// main gets the target labels and the number of days to look at from config.js/gs, then runs the function to searchAndMarkRead.
function main() {
  config.targetLabelNames.forEach(targetLabelName => { // Value of targetLabelNames is configurable in config.js/gs

    let d = new Date();
    d.setDate(d.getDate() - config.oldEmailDefinition); // Value of oldEmailDefinition is configurable in config.js/gs


    let dateYear = d.getFullYear();
    let dateMonth = d.getMonth() + 1;
    let dateDay = d.getDate();

    let fullDate = dateYear + '-' + dateMonth + '-' + dateDay;

    targetLabels = findLabels(targetLabelName);

    searchAndMarkRead(targetLabels, fullDate);
  }
  );
}

/* f
indLabels takes an individual label string, then resturns any label or sublabel with that string in the name. 
For example, if you include 'newsletters' in config.targetLabelNames, then it will include both the newsletters label, as well as any sublabels, such as newsletters/local.
*/
function findLabels(targetLabel) {
  let labelArray = [];
  let allLabels = GmailApp.getUserLabels();
  for (i in allLabels) {
    let thisLabel = allLabels[i];
    let thisLabelName = thisLabel.getName();
    if (thisLabelName.includes(targetLabel)) {
      labelArray.push(thisLabelName);
    }
  }
  return labelArray;
}

function searchAndMarkRead(searchLabels, searchDate) {
  for (i in searchLabels) {
    let thisLabelName = searchLabels[i];
    let query = 'label:' + thisLabelName + ' is:unread before:' + searchDate;

    let searchResults = GmailApp.search(query);
    for (j in searchResults) searchResults[j].markRead();
  }
}
