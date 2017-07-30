[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fiddan%2Freact-universal-markdown.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fiddan%2Freact-universal-markdown?ref=badge_shield)

<div align="center">
  <img alt="Markdown Logo" width="195" src="https://cdn.rawgit.com/iddan/react-universal-markdown/master/assets/markdown.svg" />
  <img alt="React Logo" width="300" src="https://upload.wikimedia.org/wikipedia/en/a/a7/React-icon.svg" />
  <h1>react-universal-markdown</h1>
</div>

Markdown component for Web and Native powered by CommonMark

```bash
npm install react-universal-markdown
```

### Usage

*With React DOM*
```jsx
import React, { Component } from 'react'
import { DOMMarkdown as Markdown } from 'react-universal-markdown'

export default class App extends Component {
  render() {
    return (
      <Markdown>{`
        Your markdown text
      `}</Markdown>
    )
  }
}
```

*With React Native*
```jsx
import React, { Component } from 'react'
import { NativeMarkdown as Markdown } from 'react-universal-markdown'

export default class App extends Component {
  render() {
    return (
      <Markdown>{`
        Your markdown text
      `}</Markdown>
    )
  }
}
```

### API

#### DOMMarkdown

##### Props

 ...Markdown Props

 - **className** to be added to the Document element. Other elements should be styled by CSS descendent selector. `string`]

#### DOMComponents

DOMMarkdown default components prop value

#### NativeMarkdown

##### Props

 ...Markdown Props

 - **styles** styles to be applied to each element by type
```
{
    Text : number | Object,
    Em : number | Object,
    Strong : number | Object,
    Link : number | Object,
    Image : number | Object,
    Code : number | Object,
    Paragraph : number | Object,
    BlockQuote : number | Object,
    Item : number | Object,
    List : number | Object,
    Heading : number | Object,
    CodeBlock : number | Object,
    ThematicBreak : number | Object,
    Document : number | Object,
}
```

#### NativeComponents

NativeComponents default components prop value

#### Markdown

##### Props

 - **customizer** a function to modify the parsed elements tree (AST). Executed for each level of the tree. `(children, render) => renderedChildren`
 - **children** a markdown `string`
 - **components** to be used for rendering markdown.
 ```
 {
     Text : Class<Component> | (props) => ReactElement,
     Em : Class<Component> | (props) => ReactElement,
     Strong : Class<Component> | (props) => ReactElement,
     Link : Class<Component> | (props) => ReactElement,
     Image : Class<Component> | (props) => ReactElement,
     Code : Class<Component> | (props) => ReactElement,
     Paragraph : Class<Component> | (props) => ReactElement,
     BlockQuote : Class<Component> | (props) => ReactElement,
     Item : Class<Component> | (props) => ReactElement,
     List : Class<Component> | (props) => ReactElement,
     Heading : Class<Component> | (props) => ReactElement,
     CodeBlock : Class<Component> | (props) => ReactElement,
     ThematicBreak : Class<Component> | (props) => ReactElement,
     Document : Class<Component> | (props) => ReactElement,
 }
 ```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fiddan%2Freact-universal-markdown.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fiddan%2Freact-universal-markdown?ref=badge_large)