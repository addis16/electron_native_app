var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function() {
    var appWindow, infoWindow;
    appWindow = new BrowserWindow({
        show: false
    });

    infoWindow = new BrowserWindow({
        width: 400,
        height: 300,
        frame: false,
        transparent: true,
        show: false
    });
    infoWindow.loadURL('file://' + __dirname + '/index.html');

    appWindow.once('ready-to-show', function() {
        appWindow.show();
        setTimeout(function() {
            infoWindow.show();

        }, 1000);
    });
});