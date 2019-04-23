---
title:  "VSCode Debugger"
date:   2018-04-19 10:03:00
categories: [blog]
tags: [vscode]
---

> 下面探讨的都是基于node。

VSCode的debugger遵循wire protocols，目前有两种wire protocols存在
1. legacy
2. inspector （通过--inspect开启）

VSCode默认auto，即根据当前node版本来判断。

### Launch configuration attributes
VSCode的debugger程序基于.idea文件夹下的配置文件launch.json
```ts
interface common {
  // 环境类型，比如node
  type: string
  // debug方式
  request: 'launch' | 'attach'
  // 给debugger取个名字
  name: string
  // 遵循协议
  protocol: 'auto' | 'inspector' | 'legacy'
  // debug port
  port: number
  // TCP/IP address of the debug port
  address: string
  // enable source maps by setting this to true
  sourceMaps: boolean
  // array of glob patterns for locating generated JavaScript files
  outFiles: array
  // restart session on termination
  restart: boolean
  autoAttachChildProcesses: boolean
  // when restarting a session, give up after this number of milliseconds
  timeout: number
  // break immediately when the program launches
  stopOnEntry: boolean
  // VS Code's root directory
  localRoot: string
  // Node's root directory
  remoteRoot: string
  // try to automatically step over code that doesn't map to source files
  smartStep: boolean
  // automatically skip files covered by these glob patterns
  skipFiles: array
  // enable diagnostic output
  trace: boolean
}
interface launch {
  // an absolute path to the Node.js program to debug
  program: string
  // arguments passed to the program to debug
  args: array
  // launch the program to debug in this directory
  cwd: '${workspaceFolder}'
  // absolute path to the runtime executable to be used. Default is node
  runtimeExecutable: 'node' | 'npm' | string
  // optional arguments passed to the runtime executable
  runtimeArgs: string
  // select a specific version of Node.js
  runtimeVersion: string
  // This attribute expects environment variables as a list of string typed key/value pairs
  env: {}
  // optional path to a file containing environment variable definitions
  envFile: '${workspaceFolder}/.env'
  // kind of console to launch the program
  console: 'internalConsole' | 'integratedTerminal' | 'externalTerminal'
  // This is useful for programs or log libraries that write directly to the stdout/stderr streams instead of using console.* APIs
  outputCapture: string
}
interface attach {
  // the debugger tries to attach to this process after having sent a USR1 signal, conflict with port
  processId: string
}
```

### Launch vs Attach
launch是指把debug sessions附加到接下来直接启动的node调试程序（即跟随--inspect-brk=port），注意debug port得和--inspect-brk=port对应；  
attach是指把debug sessions附加到指定的正在运行的处于debug模式的node程序的对应端口上，如果是非debug模式的node程序，则需要提供processId。

### Node Console
默认下，Node.js debug sessions是启动在Debug Console中的，因为Debug Console不支持用户输入，所以我们可以指定一个外部terminal或用VS Code内部集成的terminal。  
如果要指定一个外部terminal，那么需要配置terminal.external.windowsExec，terminal.external.osxExec， and terminal.external.linuxExec。


### Launch configuration support for 'npm' and other tools
下面两个是等价的
#### Example 1
1. node --inspect-brk program
2. start debug session
```js
// launch.json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Program",
  "program": "${workspaceFolder}/app.js"
}
```
#### Example 2
1. npm run-script debug
2. start debug session
```js
// package.json
{
  "debug": "node --inspect-brk ./app.js"
}
// launch.json
{
  "type": "node",
  "request": "launch",
  "name": "Launch via NPM",
  "runtimeExecutable": "npm",
  "runtimeArgs": [
    "run-script",
    "debug"
  ],
  "port": 9229
}
```

### node --inspect vs node --inspect-brk
inspect是node的调试模式，前者表示开启node调试模式，当我们不需要调试主程序时可以选择此模式，比如调试监听事件的回掉函数；后者表示开启node调试模式，并且在主程序开始处等待，当我们需要调试主程序时可以选择此模式。

### 自动debug
VS Code可以在当node program时自动进入debug模式

### Source maps
假如我们想要调试TS源码，我们把断点打在TS文件中，运行程序后就会进入断点，可是程序运行的代码肯定是编译后的JS文件，是怎么进入TS文件的断点呢？这就是source maps的功劳，debug adapter借助source maps解析JS文件，与TS文件建立起位置关系，这样最终运行的文件也有了断点信息，当程序运行到某个断点时，重新映射到TS文件中。VS Code默认会开启source maps。如果编译后的文件不在同级目录，则需要设置outFiles attribute告知debug adpater源文件在哪。
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch TypeScript",
      "type": "node",
      "request": "launch",
      "program": "app.ts",
      "outFiles": [ "${workspaceFolder}/bin/**/*.js" ]
    }
  ]
}
```

### 占位符
- ${workspaceFolder} - the path of the folder opened in VS Code
- ${workspaceFolderBasename} - the name of the folder opened in VS Code without any slashes (/)
- ${file} - the current opened file
- ${relativeFile} - the current opened file relative to workspaceFolder
- ${fileBasename} - the current opened file's basename
- ${fileBasenameNoExtension} - the current opened file's basename with no file extension
- ${fileDirname} - the current opened file's dirname
- ${fileExtname} - the current opened file's extension
- ${cwd} - the task runner's current working directory on startup
- ${lineNumber} - the current selected line number in the active file
- ${selectedText} - the current selected text in the active file
- ${execPath} - the path to the running VS Code executable
- ${env:Name} - environment variables
- ${config:Name} - configuration variables
- ${command:commandID} - command variables
- ${input:variableID} - input variables

[https://code.visualstudio.com/docs/nodejs/nodejs-debugging](1)
[https://code.visualstudio.com/docs/editor/variables-reference](2)