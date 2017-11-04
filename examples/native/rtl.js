import React from 'react'
import { AppRegistry, I18nManager } from 'react-native'
import {NativeMarkdown as Markdown} from 'react-universal-markdown'

I18nManager.forceRTL(true)

const App = () => (
  <Markdown>{`
# סאפי

## *שיר של [נירוונה](https://en.wikipedia.org/wiki/Nirvana_(band))*

**בית ראשון**

_ואם תגיד את תפילותיך_
אתה תעשה אותו שמח

_ואם תעשה מה שנכון_
אתה תעשה אותו שמח

אשמור אותך אטום
ותחשוב שאתה שמח

אנקב לך חורי אוויר
אתה תחשוב שאתה שמח עכשיו

אתה בחדר כביסה
אתה בחדר כביסה
אתה בחדר כביסה
  `}</Markdown>
)

AppRegistry.registerComponent('native', () => App);
