import thunk from 'redux-thunk'
import { DataStorage } from 'm2-core'
import { ReduxFactory } from 'm2-redux'
import rootReducer from '@/features/app/redux/reducers'

const store = ReduxFactory.createStore(rootReducer, thunk)
const checkIsAuth = () => DataStorage.get('app-access-token')

export default {
  store,
  checkIsAuth
}
