import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {
  App,
  Home,
} from './components'
import {
  Pages,
  ShowPage,
  NewPage,
} from './containers'

export default (store, history) => {
  return (
    <Router history={syncHistoryWithStore(history, store)}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='pages'>
          <IndexRoute component={Pages} />
          <Route
            path='new'
            component={NewPage} />
          <Route
            path=':id'
            component={ShowPage} />
        </Route>
      </Route>
    </Router>
  )
}

// export default () => {
//   return (
//     <Router history={browserHistory}>
//       <Route path='/'
//              component={App}>
//         <IndexRoute component={Home} />
//         <Route path='pages'>
//           <IndexRoute component={Pages} />
//           <Route
//             path='new'
//             component={NewPage} />
//           <Route
//             path=':id'
//             component={ShowPage} />
//         </Route>
//       </Route>
//     </Router>
//   )
// }
