# My JavaScript Standard Style

个人使用的 JS Linter，在 [Standard JS] 的基础上，做了部分改动。

## 安装配置

使用 `husky` 配置 `@cjting/standard` 作为 `pre-commit` 的钩子，推荐使用 `snazzy` 来生成输出。

```bash
yarn add -D husky @cjting/standard snazzy
```

添加如下内容到 `package.json`。

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "standard src/**/*.{js,jsx,vue} | snazzy"
    }
  }
}
```

## 规则

在 `standard` 的基础上，做了如下改动和修改。

- 引号使用 **双引号** 而不是单引号（`quotes`）
- 数组，对象等如果跨行，末尾一定 **要有逗号**（`comma-dangle`）
- 函数名和函数参数之间不需要空格，除了 `asyncArrow`

  ```javascript
  // bad
  function a () {...}
  var a = function () {...}
  var b = async() => {...}
  
  // good
  function a() {...}
  var a = function() {...}
  var b = async () => {...}
  ```

- 关键词前后都需要添加空格，除了 `if`，`switch`，`for`, `catch` 后不需要添加空格。

  ```javascript
  // bad
  if (...) {...}

  if() {
      ...
  } else{...}

  if() {

  }else {...}

  for () {
    ...
  }

  try {

  } catch (err) {

  }

  // good
  if() {...}

  if() {

  } else {...}

  for() {
    ...
  }

  try {

  } catch(err) {

  }
  ```

- `?` 和 `:` 这两个操作符的换行规则比较特殊，如果比较短，那么全部在一行，如果比较长，`?` 后跟一个换行，而 `:` 前后都跟上一个换行。

  ```javascript
  var a = short ? var1 : var2
  var b = long ?
    var3
    :
    var4
  ```

## 全局变量

所有的全局变量应该都带有 `window` 前缀，除了 `document` 和 `navigator`。如果因为某些原因引入了全局变量，必须要告知 Standard，否则将会报错。

- 在文件顶部添加如下备注

  ```javascript
  /* global var1, var2 */
  ```

- 向 `package.json` 中添加如下内容

  ```json
  "standard": {
    "globals": ["var1", "var2"]
  }
  ```

## 禁用检查

在某些情况下，需要禁用样式检查，具体请看 [ESLint disabling rules](http://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)文档。有如下几种方法。

1. 使用 `eslint-disable-line` 注释来禁止检查某一行。

```javascript
// 下面这一行不会进行样式检查
var a   = 100 // eslint-disable-line 
```

2. 使用 `eslint-disable` 和 `eslint-enable` 注释来禁止检查某一段区域的代码。

```javascript
// 下面这段被注释包裹的代码都不会进行样式检查
/* eslint-disable */
var a   = 100
var b   = 200
...
/* eslint-enable */
```

3. 在 `pacakge.json` 中配置 `disabled` 来禁止某项规则。

```js
{
  "standard": {
    "disabled": [
      "quotes" // 整个项目都不会再检查引号规则
    ]
  }
}
```


## 参考

- [ESLint Config Standard](https://github.com/standard/eslint-config-standard)
- [ESLint Plugin Vue](https://eslint.vuejs.org/)
- [Standard Engine](https://www.npmjs.com/package/standard-engine)

[Standard JS]: https://github.com/feross/standard
