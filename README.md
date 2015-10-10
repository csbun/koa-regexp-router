# koa-regexp-router

```javascript
const REGEXP = /^\/([\w\-]+)\/(\d+)$/;
//                /(  res  ) /(num)
koa.use(regexpRouter(REGEXP, function * (path, res, num) {
    // ...
}));
```
