export type Step = 1 | 2 | 3 | 4 
export type PersonalInfo = {
  name: string,
  email: string,
  phoneNumber: string
}

export type PlanType = 'monthly' | 'yearly'
export type Plan = {
  id:number,
  name: string,
  price:number
  planType: PlanType
}


export type AddOns = {
  name: string,
  description: string,
  price: number
}

export type FormPayment = {
  step: Step
  personalInfo: PersonalInfo,
  plan: Plan,
  addOns: AddOns[],
  total: number
}