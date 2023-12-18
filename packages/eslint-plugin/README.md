# @mjsdo/eslint-plugin

## Install

```zsh
yarn add -D @mjsdo/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-import
```

or

```zsh
npx install-peerdeps -D @mjsdo/eslint-plugin
```

## Usage

```js
module.exports = {
  ...,
  extends: [
    'plugin:@mjsdo/common',
    'plugin:@mjsdo/typescript',
  ],
  ...,
};
```
