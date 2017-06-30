import React from 'react'
import { render } from 'react-dom'
import MyTitle from './MyTitle'

/*
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitleFactory = React.createFactory(MyTitle)
*/

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are cool' color='rebeccapurple' />
        <MyTitle title='props are amazing' color='mediumaquamarine' />
        <MyTitle title='props are sweet' color='peru' />
      </div>
/*      div(null,
        h1(null, 'This is my first component'),
        MyTitleFactory({title: 'title 1', color: 'peru'}),
        MyTitleFactory({title: 'title 2', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'title 9', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'title 42', color: 'darkvioletred'})
      )*/
    )
  }
})
render(React.createElement(MyFirstComponent), document.getElementById('app'))
