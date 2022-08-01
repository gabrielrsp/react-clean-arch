import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAuthentication } from "./remote-authentication"
import faker from 'faker'
import { mockAuthentication } from "../../../domain/test/mock-authentication"


type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url:string = faker.internet.url()): SutTypes => { // factory method
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)  // sut: system under test 

  return {
    sut,
    httpPostClientSpy
  }
} 
  

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {

    const url = faker.internet.url()
    const {sut, httpPostClientSpy} = makeSut(url)
    await sut.auth(mockAuthentication())  // o metodo auth chama o metodo post 
    expect(httpPostClientSpy.url).toBe(url)
  })

  
  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
})