# classic-modale

classic-modale include a modale, that you can custom.

## exemple

```
import React, { useState } from "react";
import { Modale } from "classic-modale";

const App = () => {
  
  const [modaleOpen, setModaleOpen] = useState(true)
  return(
    <div style={{ width: 640, margin: "15px auto" }}>
      {modaleOpen && <Modale backgroundShadow setOpen={setModaleOpen} text="Hello World !"/>}
    </div>
  )
};
```

## props

### setOpen :

Your state to close and open the modale. Your state is modified as "true" or "false".

### customContent :

Can be every content, like a React Component or a classic text.

### text :

String, to choose which text is displayed.
Only appear if there are no customContent

### backgroundShadow :

Boolean, to display a shadow behind the modale.

### modaleStyle, crossStyle, textStyle :

These 3 props are objects that can change the style of these elements: **modale**, **cross** and **text**.
