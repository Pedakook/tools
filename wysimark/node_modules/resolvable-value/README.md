# resolvable-value

Use it when you want to take an argument that may be a `Promise` or may be a `function` or `async function` that returns a value of a given type.

## Install

```sh
# Yarn
$ yarn add resolvable-value

# NPM
$ npm install --save resolvable-value
```

## Usage

```typescript
import { Resolvable, resolve } from "resolvable-value"

async function logResolvableValue(resolvableString: Resolvable<string>) {
  const value = await resolve(resolvableString)
  console.log(value)
}
```
