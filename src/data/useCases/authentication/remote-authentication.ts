import { HttpPostClient } from "../../protocols/http/http-post-client";
import { AuthenticationParams } from "../../../domain/useCases/authentication";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { AccountModel } from "@/domain/models/account-model";
import { Authentication } from "@/domain/useCases/authentication"

//recebe uma url, e um http client como parametros de construtores, e com o metodo auth, faz a chamada da url a partir do http client
export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}
  

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.HttpPostClient.post({
      url: this.url,
      body: params
    }) 
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}

