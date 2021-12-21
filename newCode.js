function checkEmails() {
  // lololol
  var d = new Date();
  d.setDate(d.getDate() - 1);
  
  
  var dateYear = d.getFullYear();
  var dateMonth = d.getMonth() + 1;
  var dateDay = d.getDate();
  
  var fullDate = dateYear + '-' + dateMonth + '-' + dateDay;
  
  var query = 'label:newsletters is:unread before:' + fullDate;
  
  var searchResults = GmailApp.search(query);
  for (i in searchResults) searchResults[i].markRead();
}
