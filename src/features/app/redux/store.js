import thunk from 'redux-thunk'
import { ReduxFactory } from 'm2-redux'
import rootReducer from '@/features/app/redux/reducers'

export default () => ReduxFactory.createStore(rootReducer, thunk)
