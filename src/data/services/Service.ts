import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const NodeAPI: AxiosInstance = axios.create({
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Expose-Headers': 'Access-Control-',
    'Access-Control-Allow-Headers': 'Access-Control-, Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    'Access-Control-Allow-Origin': '*',
    'Cache-control': 'no-cache',
    Allow: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
  },
})

NodeAPI.interceptors.request.use((config: AxiosRequestConfig) => {
  if ((config.method === 'post' || config.method === 'put') && config.url && config.url.includes('/veiculo')) config.headers['Content-Type'] = 'multipart/form-data'
  return config
})

export { NodeAPI }
