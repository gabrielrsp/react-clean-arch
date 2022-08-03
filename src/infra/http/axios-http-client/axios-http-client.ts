import { HttpPostClient, HttpPostParams, HttpResponse } from "@/data/protocols/http"
import axios from "axios"

export class AxiosHttpClient implements HttpPostClient<any,any> {    // ADAPTER DESIGN PATTERN - Adaptando interfaces diferentes (fazendo com que HttpPostClient e Axios se adaptam ao sistema )
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}