# unused-react-component-prop

 Make sure you havent unused props in your components.

```js
import React from 'react'

const Example = ({ child, unused_var }) => {
  return (
    <div>
      {child}
    </div>
  )
}

export default Example
```

```sh
3:24  error  Unused prop in react component
✖ 1 problem (1 error, 0 warnings)
```

