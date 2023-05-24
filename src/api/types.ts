export namespace LOGIN {
  export interface IFormState {
    username: string
    password: string
    mobile: string
    msgCode: string
    remember: boolean
  }
  export interface ILogin {
    type: number
    username: string
    password: string
  }
}
