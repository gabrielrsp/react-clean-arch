import { AccountModel } from "domain/models/account-model"

type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>
}

//Quem implementar essa interface precisa implementar o metodo auth recebendo os parametros definidos e retornando a promise com a tipagem definida