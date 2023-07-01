let { app, BrowserWindow } = require("electron")
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: 'COM6', baudRate: 115200 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))


let win 
  function createWindow() {
  win = new BrowserWindow({
    width: 1500,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  win.removeMenu()
  win.loadFile("./public/index.html")
  win.webContents.openDevTools()
  parser.on('data', function (data) {
    win.webContents.send("line", data);
  })
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  app.quit()
})

