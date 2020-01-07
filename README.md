# react-hooks

# config debuger open chromium

 {
    "version": "0.2.0",
    "configurations": [
    
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chromium against localhost",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}",
            "runtimeExecutable": "/snap/bin/chromium",
            "runtimeArgs": [
              "--new-window",
              "-user-data-dir=\"/${workspaceFolder}/DevProfile\"",
              "--remote-debugging-port=9222",
              "--disable-background-networking"
            ]
        }
    ]
}