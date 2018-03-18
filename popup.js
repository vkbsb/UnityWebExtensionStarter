function onCreated(tab) {
    console.log(`Created new tab: ${tab.id}`)
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }

browser.browserAction.onClicked.addListener(function() {
    var creating = browser.windows.create({
    url:"/game/index.html",
    type: "panel",
    width: 320,
    height: 480
    });
    creating.then(onCreated, onError);
});