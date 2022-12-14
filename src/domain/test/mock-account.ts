import { AuthenticationParams } from "domain/useCases/authentication";
import faker from 'faker'
import { AccountModel } from "../models";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})