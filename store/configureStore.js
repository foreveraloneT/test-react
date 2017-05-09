import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'

export default (history) => {
  const middlewares = [thunk, apiMiddleware, routerMiddleware(history)]

  if(process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger())

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }

  return store
}

// const thunk = (store) => (next) => (action) => (
//   typeof action == 'function' ?
//     action(store.dispatch, store.getState) :
//     next(action)
// )
//
// export default () => {
//   const middlewares = [thunk]
//   const store = createStore(
//     rootReducer,
//     applyMiddleware(...middlewares)
//   )
//
//   if (module.hot) {
//     module.hot.accept('../reducers', () => {
//       System.import('../reducers').then(nextRootReducer =>
//         store.replaceReducer(nextRootReducer.default)
//       )
//     })
//   }
//
//   return store
// }

// const promise = (store) => {
//   const next = store.dispatch
//   return (action) => {
//     if (typeof action.then === 'function')
//       return action.then(next)
//     return next(action)
//   }
// }
//
// export default () => {
//   const store = createStore(rootReducer)
//   store.dispatch = promise(store)
//
//   if (module.hot) {
//     System.import('../reducers').then(nextRootReducer =>
//       store.replaceReducer(nextRootReducer.default)
//     )
//   }
//
//   return store
// }
