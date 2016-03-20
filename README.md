# react-transform-hoc

This is a [react-transform](https://github.com/gaearon/babel-plugin-react-transform) that just takes your [higher order components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750) as [imports](https://github.com/gaearon/babel-plugin-react-transform#configuration) and wraps all react components with them.

### Usage

If you want all your components to only render when props have change, you can just tell react-transform-hoc to use [recompose's `pure`](https://github.com/acdlite/recompose/blob/master/docs/API.md#pure) Higher Order Component.

> .babelrc
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

### Why not?

Some react-transforms use the meta data provided to do something more nuanced than just apply a HoC to every react component. Transforms like [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors) need to know which file they're operating on to provide quality error messages.
