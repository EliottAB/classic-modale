# classic-modale

classic-modale include a modale, that you can custom.

## exemple

```
import React from 'react';
import { render } from "react-dom";
import { Modale } from "./lib";

  <div>
    <Modale backgroundShadow opened={true} text="Hello World !" crossStyle={{backgroundColor: "blue"}}/>
  </div>
```

## props

### setOpen :
If you want to play with the state without impact transitions,
you can create a state and pass his function in this prop.

### opened :

Boolean, to display the modale or no.

### customContent :

Can be every content, like a React Component or a classic text.

### text :

String, to choose which text is displayed.
Only appear if there are no customContent

### backgroundShadow :

Boolean, to display a shadow behind the modale.

### modaleStyle, crossStyle, textStyle :

These 3 props are objects that can change the style of these elements: **modale**, **cross** and **text**.
