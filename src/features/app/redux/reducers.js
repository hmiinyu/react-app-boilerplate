import { ReduxFactory } from 'm2-redux'
import commonReducer from '@/features/common/redux/reducers'
import homeReducer from '@/features/home/redux/reducers'
// 如增加新的业务模块，需在此注册
// import authReducer from '@/features/auth/redux/reducers'

const reducerMap = {
  common: commonReducer,
  home: homeReducer,
  // 同时添加到reducer映射
  // auth: authReducer
}

export default (state, action) => ReduxFactory.createAppReducer(reducerMap, state, action);
