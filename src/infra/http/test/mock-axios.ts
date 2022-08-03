import axios from "axios"
import faker from "faker"

export const mockAxios = (): jest.Mocked<typeof axios> => {   // Mocked post request that returns a fake data and fake status
    const mockedAxios = axios as jest.Mocked<typeof axios>

    mockedAxios.post.mockResolvedValue({  
      data: faker.random.objectElement(),
      status: faker.datatype.number()
    })
  
    return mockedAxios
}