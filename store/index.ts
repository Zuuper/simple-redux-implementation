import {configureStore} from '@reduxjs/toolkit'
import paymentFormReducer from './features/formPaymentSlice'

export const store = configureStore({
  reducer: {
    formInput: paymentFormReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch