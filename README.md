# react-transform-hoc

This is a [react-transform](https://github.com/gaearon/babel-plugin-react-transform) that just takes your higher order components as imports and wraps all react components with them.

### Usage

If you want all your components to only render when props have change, you can just tell react-transform-hoc to use [recompose's `pure`](https://github.com/acdlite/recompose/blob/master/docs/API.md#pure) Higher Order Component.

```js
{
  "presets": [
    "react"
  ],
  "plugins": [
    ["react-transform", {
      "transforms": [{
        "transform": "react-transform-hoc",
        "imports": [
          "recompose/pure"
        ]
      }]
    }]
  ]
}
```
