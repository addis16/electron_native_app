var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;
var Menu = electron.Menu;
var myAppMenu, menuTemplate;

function toggleWindow(whichWindow) {
  if (whichWindow.isVisible()) {
    whichWindow.hide();
  } else {
    whichWindow.show();
  }
}

app.on('ready', function() {
  var appWindow, infoWindow;
  appWindow = new BrowserWindow({
    show: false
  }); //appWindow

  appWindow.loadURL('file://' + __dirname + '/index.html');

  infoWindow = new BrowserWindow({
    width: 400,
    height: 300,
    show: false
  }); //infoWindow

  infoWindow.loadURL('file://' + __dirname + '/info.html');

  appWindow.once('ready-to-show', function() {
    appWindow.show();
  }); //ready-to-show

  ipc.on('openInfoWindow', function(event, arg) {
    event.returnValue='';
    infoWindow.show();
  });

  ipc.on('closeInfoWindow', function(event, arg){
    event.returnValue='';
    infoWindow.hide();
  }); //closeInfoWindow

  menuTemplate = [
    {
      label: 'Electron App',
      submenu: [
        {
          accelerator: process.platform === 'darwin' ? 'Command+I' : 'Ctrl+I',
          click(item) { toggleWindow(infoWindow) }
        },
        {
          label: 'Add Appointment',
          accelerator: process.platform === 'darwin' ? 'Command+N' : 'Ctrl+N',
          click(item, focusedWindow) {
            if(focusedWindow) focusedWindow.webContents.send('addAppointment');
          }
        },
        {
          role: 'Website',
          label: 'Go to Website',
          click() { electron.shell.openExternal('http://www.jacob-addis.com') }
        },
        {role: 'close'},
        {role: 'quit'}
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {role: 'undo'},
        {role: 'redo'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'selectall'},
      ]
    },
    {
    label: 'View',
      submenu: [
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'toggledevtools'},
        {type: 'separator'},
        {role: 'resetzoom'},
        {role: 'zoomin'},
        {role: 'zoomout'},
        {type: 'separator'},
        {role: 'togglefullscreen'}
      ]
    },
  ];

  myAppMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(myAppMenu);

}); //app is ready
