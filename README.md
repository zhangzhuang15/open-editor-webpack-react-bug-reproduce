# Reproduce

environment:
- node 14.21.3
- npm 6.14.18
- MacOS 14.2
- M3 Pro Chip

follow these steps to reproduce:
```sh
$ npm install
$ npm run serve
```

error message:
```txt
Did you mean 'index.js'?
BREAKING CHANGE: The request './index' failed to resolve only because it was resolved as fully specified
(probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.
```
