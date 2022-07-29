import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAuthentication } from "./remote-authentication"

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makSut = (url:string = 'any_url'): SutTypes => { //factory
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)  // sut: system under test 

  return {
    sut,
    httpPostClientSpy
  }
} 
  

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {

    const url = 'other_url'
    const {sut, httpPostClientSpy} = makSut(url)
    await sut.auth()  // o metodo auth chama o metodo post 
    expect(httpPostClientSpy.url).toBe(url)
  })
})