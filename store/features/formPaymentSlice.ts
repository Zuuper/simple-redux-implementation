import { FormPayment } from "@/interfaces/formPayment";
import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

export const paymentFormSlice = createSlice({
  name: 'payment-form',
  initialState: {
    step: 4,
    personalInfo: {
      name: '',
      email: '',
      phoneNumber: ''
    },
    plan: {},
    addOns: [{}],
    total: 0
  } as FormPayment,
  reducers: {
    
  }
})

export const paymentFormAction = paymentFormSlice.actions
export const paymentForm = (state:RootState) => state.formInput
export default paymentFormSlice.reducer