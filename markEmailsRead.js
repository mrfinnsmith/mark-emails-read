/*
What this is:

labelName variable at the top of the file can be configured to look for any other label name. Gmail nested labels are named with the parent label, then "/", then the child label. So if you make labelName 'newsletter,' this script will find any email labeled 'newsletter,' as well as anything labeled 'newsletter/fun' or 'newsletter/local.'
 */

function main() {
  config.targetLabelNames.forEach(targetLabelName => {

    let d = new Date();
    d.setDate(d.getDate() - 1);


    let dateYear = d.getFullYear();
    let dateMonth = d.getMonth() + 1;
    let dateDay = d.getDate();

    let fullDate = dateYear + '-' + dateMonth + '-' + dateDay;

    targetLabels = findLabels(targetLabelName);

    searchAndMarkeRead(targetLabels, fullDate);
  }
  );
}

function findLabels(targetLabel) { // This function grabs an array of labels that include the string at the top of the file.
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

function searchAndMarkeRead(searchLabels, searchDate) {
  for (i in searchLabels) {
    let thisLabelName = searchLabels[i];
    let query = 'label:' + thisLabelName + ' is:unread before:' + searchDate;

    let searchResults = GmailApp.search(query);
    for (j in searchResults) searchResults[j].markRead();
  }
}
