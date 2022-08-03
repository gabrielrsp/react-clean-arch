import { AxiosHttpClient } from "./axios-http-client"
import faker from 'faker'
import { HttpPostParams } from "@/data/protocols/http"
import { mockAxios } from "../test"
import { mockPostRequest } from "@/data/test"
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {  //Factory method
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  
  return {
    sut,
    mockedAxios
  }
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient',() => {
  test('Should call axios with correct values', async () => {
     const request = mockPostRequest()
     const { sut, mockedAxios } = makeSut()
     await sut.post(request)
     expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct status code and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
 })

})