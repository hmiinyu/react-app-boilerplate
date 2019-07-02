import thunk from 'redux-thunk'
import { enableHotUpdate } from 'm2-react'
import { ReduxFactory } from 'm2-redux'
import rootReducer from '@/features/app/redux/reducers'

const store = ReduxFactory.createStore(rootReducer, thunk)
const checkIsAuth = () => store.getState().auth.loginUser.authenticated

enableHotUpdate(store,
  '@/features/app/redux/reducers',
  require('@/features/app/redux/reducers').default)

export default {
  store,
  checkIsAuth
}
