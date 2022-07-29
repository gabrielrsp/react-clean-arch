import { HttpPostClient } from "data/protocols/http/http-post-client";

//recebe uma url, e um http client como parametros de construtores, e com o metodo auth, faz a chamada da url a partir do http client
export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient
  ) {}
  

  async  auth (): Promise<void> {
    await this.HttpPostClient.post(this.url) 
  }
}

