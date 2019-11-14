---
title: "VSCode Debugger"
date: 2019-04-19 10:03:00
categories: [blog]
tags: [vscode]
---

> 下面探讨的都是基于 node。

VSCode 的 debugger 遵循 wire protocols，目前有两种 wire protocols 存在

1. legacy
2. inspector （通过--inspect 开启）

VSCode 默认 auto，即根据当前 node 版本来判断。

### Launch configuration attributes

VSCode 的 debugger 程序基于.idea 文件夹下的配置文件 launch.json

```ts
interface common {
  // 环境类型，比如node
  type: string;
  // debug方式
  request: "launch" | "attach";
  // 给debugger取个名字
  name: string;
  // 遵循协议
  protocol: "auto" | "inspector" | "legacy";
  // debug port
  port: number;
  // TCP/IP address of the debug port
  address: string;
  // enable source maps by setting this to true
  sourceMaps: boolean;
  // array of glob patterns for locating generated JavaScript files
  outFiles: array;
  // restart session on termination
  restart: boolean;
  autoAttachChildProcesses: boolean;
  // when restarting a session, give up after this number of milliseconds
  timeout: number;
  // 断点会停在第一行，break immediately when the program launches
  stopOnEntry: boolean;
  // VS Code's root directory
  localRoot: string;
  // Node's root directory
  remoteRoot: string;
  // try to automatically step over code that doesn't map to source files
  smartStep: boolean;
  // automatically skip files covered by these glob patterns
  skipFiles: array;
  // enable diagnostic output
  trace: boolean;
}
interface launch {
  // an absolute path to the Node.js program to debug
  program: string;
  // arguments passed to the program to debug
  args: array;
  // launch the program to debug in this directory
  cwd: "${workspaceFolder}";
  // absolute path to the runtime executable to be used. Default is node
  runtimeExecutable: "node" | "npm" | string;
  // optional arguments passed to the runtime executable
  runtimeArgs: string;
  // select a specific version of Node.js
  runtimeVersion: string;
  // This attribute expects environment variables as a list of string typed key/value pairs
  env: {};
  // optional path to a file containing environment variable definitions
  envFile: "${workspaceFolder}/.env";
  // kind of console to launch the program
  console: "internalConsole" | "integratedTerminal" | "externalTerminal";
  // This is useful for programs or log libraries that write directly to the stdout/stderr streams instead of using console.* APIs
  outputCapture: string;
  // 在lanuch前执行指定任务
  preLaunchTask: string;
}
interface attach {
  // the debugger tries to attach to this process after having sent a USR1 signal, conflict with port
  processId: string;
}
```

### Launch vs Attach

launch 是指把 debug sessions 附加到接下来直接启动的 node 调试程序（即跟随--inspect-brk=port），注意 debug port 得和--inspect-brk=port 对应；  
attach 是指把 debug sessions 附加到指定的正在运行的处于 debug 模式的 node 程序的对应端口上，如果是非 debug 模式的 node 程序，则需要提供 processId。

### Node Console

默认下，Node.js debug sessions 是启动在 Debug Console 中的，因为 Debug Console 不支持用户输入，所以我们可以指定一个外部 terminal 或用 VS Code 内部集成的 terminal。  
如果要指定一个外部 terminal，那么需要配置 terminal.external.windowsExec，terminal.external.osxExec， and terminal.external.linuxExec。

### Launch configuration support for 'npm' and other tools

下面 3 个是等价的

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

#### Example 3

```js
{
  "name": "调试 TS Node 程序 - args",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "node",
  "args": [
    "${workspaceFolder}/src/app.js"
  ]
}
```

#### Example 4

```js
{
  "name": "调试 TS Node 程序 - preTask",
  "type": "node",
  "request": "launch",
  "program": "${workspaceFolder}/out/app.js",
  // 在 launch 调试之前先执行一个任务
  "preLaunchTask": "tsc_build"
}
```

#### 5

```js
{
  "name": "Attach to node",
  "type": "node",
  "request": "attach",
  "processId": "${command:PickProcess}"
}
```

### node --inspect vs node --inspect-brk

inspect 是 node 的调试模式，前者表示开启 node 调试模式，当我们不需要调试主程序时可以选择此模式，比如调试监听事件的回掉函数；后者表示开启 node 调试模式，并且在主程序开始处等待，当我们需要调试主程序时可以选择此模式。

### 自动 debug

VS Code 可以在当 node program 时自动进入 debug 模式

### Source maps

假如我们想要调试 TS 源码，我们把断点打在 TS 文件中，运行程序后就会进入断点，可是程序运行的代码肯定是编译后的 JS 文件，是怎么进入 TS 文件的断点呢？这就是 source maps 的功劳，debug adapter 借助 source maps 解析 JS 文件，与 TS 文件建立起位置关系，这样最终运行的文件也有了断点信息，当程序运行到某个断点时，重新映射到 TS 文件中。VS Code 默认会开启 source maps。如果编译后的文件不在同级目录，则需要设置 outFiles attribute 告知 debug adpater 源文件在哪。

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch TypeScript",
      "type": "node",
      "request": "launch",
      "program": "app.ts",
      "outFiles": ["${workspaceFolder}/bin/**/*.js"]
    }
  ]
}
```

### 占位符

- \${workspaceFolder} - the path of the folder opened in VS Code
- \${workspaceFolderBasename} - the name of the folder opened in VS Code without any slashes (/)
- \${file} - the current opened file
- \${relativeFile} - the current opened file relative to workspaceFolder
- \${fileBasename} - the current opened file's basename
- \${fileBasenameNoExtension} - the current opened file's basename with no file extension
- \${fileDirname} - the current opened file's dirname
- \${fileExtname} - the current opened file's extension
- \${cwd} - the task runner's current working directory on startup
- \${lineNumber} - the current selected line number in the active file
- \${selectedText} - the current selected text in the active file
- \${execPath} - the path to the running VS Code executable
- \${env:Name} - environment variables
- \${config:Name} - configuration variables
- \${command:commandID} - command variables
- \${input:variableID} - input variables

[1]: https://code.visualstudio.com/docs/nodejs/nodejs-debugging
[2]: https://code.visualstudio.com/docs/editor/variables-reference
