import React, {Component} from 'react';
import Markdown from 'react-universal-markdown/dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <article>
        <Markdown>{`
# Sappy

## *A song by [Nirvana](https://en.wikipedia.org/wiki/Nirvana_(band)) from the album [Bleach](https://en.wikipedia.org/wiki/Bleach_(Nirvana_album))*

![Nirvana Sappy (Smart Studio Session)](https://i.ytimg.com/vi/YFnsL0NuN0Q/0.jpg)

**Verse 1**

_And if you say your prayers_
You will make him happy

_And if you do what's true_
You will make me happy

I'll keep you in a jar
And you will seem happy

I'll give you breathing holes
You will think you're happy now


**Chorus**

*You're in a laundry room
You're in a laundry room
You're in a laundry room*


**Verse 2**

_And if you save yourself_
You will make him happy

He'll bring you fine rewards
Then you will feel happy

I'll keep you in a room
I'm sure you'll be happy

_And if you save your soul_
You will think you're happy now


**Chorus**

*You're in a laundry room*
*You're in a laundry room*
*You're in a laundry room*

---

> Nirvana was an American rock band formed by singer and guitarist Kurt Cobain and bassist Krist Novoselic in Aberdeen, Washington, in 1987.
> Nirvana went through a succession of drummers, the longest-lasting being Dave Grohl, who joined in 1990.

\`curl https://en.wikipedia.org/wiki/Nirvana_(band)\`

---

##### Other Songs by Nirvana

 - Beans
 - Floyd the Barber
 - Smells Like Teen Spirit

##### Studio versions (by album)

1. No Alternative
2. Bleach
3. Montage of Heck: The Home Recordings
4. Sliver: The Best of the Box
5. Nevermind (deluxe)
6. No Alternative
7. With the Lights Out
8. In Utero (deluxe)
      `}</Markdown>
      </article>
    );
  }
}

export default App;
