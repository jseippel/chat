// var body = document.querySelector("body");
var test = "heyyy"

chrome.runtime.sendMessage(test/* Send anything you want here, including page contents*/,
  function(response) {
    // And do anything you want here
  }
);
