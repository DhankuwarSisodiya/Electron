const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const updateBtn = document.getElementById('updateBtn');
updateBtn.addEventListener('click',function(event)
{
  console.log("Hii from console");
})
