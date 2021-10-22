import axios, { AxiosPromise, Method } from 'axios'
import * as url from 'url'

const BASE_URL = '/api'

export interface QueryParameters {
  PageSize: string
  Offset: string
  SortDirection: 'Desc' | 'Asc'
}

export function getAccessToken(): string | null {
  return localStorage.getItem('access_token')
}

export function removeAccessTokens(): void {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

class AxiosAPI {
  public token = ''

  public get = (
    urlPath: string,
    data?: any,
    params?: QueryParameters,
    isAuthenticated = true
  ): AxiosPromise<any> => this.handleRequest(isAuthenticated, 'get', urlPath, data, params)

  public post = (urlPath: string, data?: any, isAuthenticated = true): AxiosPromise<any> =>
    this.handleRequest(isAuthenticated, 'post', urlPath, data)

  public put = (urlPath: string, data?: any, isAuthenticated = true): AxiosPromise<any> =>
    this.handleRequest(isAuthenticated, 'put', urlPath, data)

  public delete = (urlPath: string, data?: any, isAuthenticated = true): AxiosPromise<any> =>
    this.handleRequest(isAuthenticated, 'delete', urlPath, data)


  private handleRequest = (
    isAuthenticated: boolean,
    method: Method,
    urlPath: string,
    data?: any,
    params?: QueryParameters
  ): AxiosPromise<any> => {
    const localUrlPath = url.parse(urlPath, true)
    localUrlPath.query = { ...localUrlPath.query, ...params }

    const config: any = {
      method,
      timeout: 12000,
      headers: this.getHeader(isAuthenticated),
      url: BASE_URL + url.format(localUrlPath),
      data,
    }

    return axios(config)
  }

  private getHeader = (isAuthenticated: boolean): object => {
    if (!isAuthenticated) {
      return { 'Content-Type': 'application/json' }
    }

    if (this.token) {
      return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      }
    } else {
      const token = getAccessToken()
      if (token !== '' && token) {
        this.token = token
        return {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
        }
      } else {
        return {
          'Content-Type': 'application/json',
        }
      }
    }
  }
}

export default new AxiosAPI()