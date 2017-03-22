# scroll-smooth

Scroll with _smooth_ gestures

### API

```js
/**
 * Simple 
 */
scrollSmooth.to(elem|position)

// like
scrollSmooth.to(document.querySelector('.myElem'))
// or 
scrollSmooth.to(700)

/**
 * With Options
 */
scrollSmooth.to(elem|position, {
  duration,
  context,
  offset,
  ease,
  callback,
})

// like
scrollSmooth.to(document.querySelector('.myElem'), {
  duration: 1500
  offset: 100,
  callback: elem => console.log(`Yup! Hi ${elem}!`),
})

// or 
scrollSmooth.to(document.querySelector('.another'), {
  context: document.querySelector('.parent')
  callback: elem => console.log(`Yup! ${elem} inside a context different than window!`),
})
```
