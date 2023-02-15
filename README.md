# ChatGPT Chrome Extension

A chrome extension to add ChatGPT as a search engine

This extension basically just automates a small bit of work, so that you can use ChatGPT the same way that you would use a regular search engine.

## Steps

1. Add this extension
  - From [Chrome web store](https://chrome.google.com/webstore/detail/chatgpt-as-a-search-engin/fpmkloadngjobjlckhokcaklldkjbojh)
  - From source:
    1. Clone this repo
    2. Go to `chrome://extensions/`
    3. Enable developer mode
    4. Click on `Load unpacked`
    5. Select the folder where you cloned this repo
2. Go to `chrome://settings/searchEngines`
3. Add a new search engine
4. Set the name to `ChatGPT`
5. Set the keyword to `c` (or your preferred keyword)
6. Set the URL to `https://chat.openai.com/chat?q=%s`
