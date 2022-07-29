import { HttpPostClient } from "data/protocols/http/http-post-client"

export class HttpPostClientSpy implements HttpPostClient {   // classe de teste implementando a interface HttpPostClient
  url?: string
  
  async post (url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
}
