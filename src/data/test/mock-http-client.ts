import { HttpPostClient, HttpPostParams } from "../protocols/http/http-post-client"

export class HttpPostClientSpy implements HttpPostClient {   // classe de teste implementando a interface HttpPostClient
  url?: string
  body?: object
  
  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
