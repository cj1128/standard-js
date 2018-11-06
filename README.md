# ShuoYe Standard

朔夜项目使用的JS Linter。在[Standard JS]的基础上，做了部分改动。

## 参考

- [ESLint Config Standard](https://github.com/standard/eslint-config-standard)

## 注意

目前，由于`ESLint`的问题，对于`?`号操作符多行模式下的缩进会报错，需要使用`/* eslint-disable /*`来关闭相关校验，[相关Issue](https://github.com/eslint/eslint/issues/6606)。

```javascript
// this is the correct style, but `standard` will complain
/* eslint-disable */
const A = condition ?
  [
    1,
    2,
    3,
  ]
  :
  [
    4,
    5,
    6,
  ]
/* eslint-enable */
```

## 安装配置

使用`husky`配置`@shuoye/standard`作为`pre-commit`的钩子，推荐使用`snazzy`来美化输出。

```bash
yarn add -D husky
yarn add -D @shuoye/standard
yarn add -D snazzy
```

```javascript
// vim package.json
{
  "scripts": {
    "precommit": "standard src/**/*.{js,jsx,vue} | snazzy"
  }
}
```

## 规则

在`standard`的基础上，做了如下改动和修改。

- 引号使用**双引号**而不是单引号（`quotes`）
- 数组，对象等如果跨行，末尾一定**要有逗号**（`comma-dangle`）
- 函数名和函数参数之间不需要空格，除了`asyncArrow`

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

- 关键词前后都需要添加空格，除了`if`，`switch`，`for`, `catch`后不需要添加空格。

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

- 默认使用`eslint-babel`作为`parser`，主要是默认parser目前不支持[Class Property](https://babeljs.io/docs/plugins/transform-class-properties/)，而这个特性很有用。

- `?`和`:`这两个操作符的换行规则比较特殊，如果比较短，那么全部在一行，如果比较长，`?`后跟一个换行，而`:`前后都跟上一个换行。

  ```javascript
  var a = short ? var1 : var2
  var b = long ?
    var3
    :
    var4
  ```

## 全局变量

所有的全局变量应该都带有`window`前缀，除了`document`和`navigator`。如果因为某些原因引入了全局变量，必须要告知Standard，否则将会报错。

- 在文件顶部添加如下备注

  ```javascript
  /* global var1, var2 */
  ```

- 向`package.json`中添加如下内容

  ```json
  "standard": {
    "globals": ["var1", "var2"]
  }
  ```

## 禁用检查

在某些情况下，需要禁用样式检查，具体请看[ESLint disabling rules](http://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)文档。简单来说，有两种方式。

1. 使用`eslint-disable-line`注释来禁止检查某一行。

```javascript
// 下面这一行不会进行样式检查
var a   = 100 // eslint-disable-line 
```

2. 使用`eslint-disable`和`eslint-enable`注释来禁止检查某一段区域的代码。

```javascript
// 下面这段被注释包裹的代码都不会进行样式检查
/* eslint-disable */
var a   = 100
var b   = 200
...
/* eslint-enable */
```

[Standard JS]: https://github.com/feross/standard
