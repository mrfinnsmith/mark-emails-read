/*
What this is:

labelName variable at the top of the file can be configured to look for any other label name. Gmail nested labels are named with the parent label, then "/", then the child label. So if you make labelName 'newsletter,' this script will find any email labeled 'newsletter,' as well as anything labeled 'newsletter/fun' or 'newsletter/local.'
 */

//targetLabelName = 'newsletter' // This is the type of label that it looks for. Update to search for other labels and sublabels.

function main() {
  config.targetLabelNames.forEach(targetLabelName => {

    var d = new Date();
    d.setDate(d.getDate() - 1);


    var dateYear = d.getFullYear();
    var dateMonth = d.getMonth() + 1;
    var dateDay = d.getDate();

    var fullDate = dateYear + '-' + dateMonth + '-' + dateDay;

    targetLabels = findLabels(targetLabelName);

    searchAndMarkeRead(targetLabels, fullDate);
  }
  );
}

function findLabels(targetLabel) { // This function grabs an array of labels that include the string at the top of the file.
  var labelArray = [];
  var allLabels = GmailApp.getUserLabels();
  for (i in allLabels) {
    var thisLabel = allLabels[i];
    var thisLabelName = thisLabel.getName();
    if (thisLabelName.includes(targetLabel)) {
      labelArray.push(thisLabelName);
    }
  }
  return labelArray;
}

function searchAndMarkeRead(searchLabels, searchDate) {
  for (i in searchLabels) {
    var thisLabelName = searchLabels[i];
    var query = 'label:' + thisLabelName + ' is:unread before:' + searchDate;

    var searchResults = GmailApp.search(query);
    for (j in searchResults) searchResults[j].markRead();
  }
}
