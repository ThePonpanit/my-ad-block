chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.url.includes('https://www.rh2plusmanga.com/')) {
        chrome.tabs.executeScript(tabId, { file: 'hideAds.js' });
    }
});
