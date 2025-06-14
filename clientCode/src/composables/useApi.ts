import axios, { AxiosError } from 'axios'
import { useAuthStore } from '~/stores/auth'
import { useTipStore } from '~/stores/tip'

export const useApi = () => {
  const { public: { apiBase, apiLogin, apiMicro } } = useRuntimeConfig()
  const auth = useAuthStore()
  const tip = useTipStore()
  const requestLogin = async <T = any>(params?: Record<string, any>) => {
    try {
      const headers: Record<string, string> = {}
      // if (auth.token && cmd !== 'login') {
      //   headers.Authorization = `Bearer ${auth.token}`
      // }
      console.log('API Request:', { params })
      const response = await axios({
        method: 'post',
        url: `${apiLogin}`,
        params: params,
        headers
      })
      return response.data as T
    } catch (error: any) {
      errorHandling(error.response.data.Code, error.response.data.Msg)
      console.error('Login API Error:', error)
      // throw error
    }
  }

  const requestGet = async <T = any>(cmd: string, params?: Record<string, any>) => {
    try {
      const headers: Record<string, string> = {}
      if (auth.token && cmd !== 'login') {
        headers.Authorization = `Bearer ${auth.token}`
      }
      console.log('API Request:', { cmd, params })
      const response = await axios({
        method: 'get',
        url: `${apiBase}` + `/${cmd}`,
        params: params,
        headers
      })
      // errorHandling(response.data.Code, response.data.Msg)
      return response.data as T
    } catch (error: any) {
      errorHandling(error.response.data.Code, error.response.data.Msg)
      console.error('API Error:', error)
      throw error
    }
  }

  const requestPost = async <T = any>(cmd: string, params?: Record<string, any>) => {
    try {
      const headers: Record<string, string> = {}
      if (auth.token && cmd !== 'login') {
        headers.Authorization = `Bearer ${auth.token}`
      }
      console.log('API Request:', { cmd, params })
      const response = await axios({
        method: 'post',
        url: `${apiBase}` + `/${cmd}`,
        params: params,
        headers
      })
      // errorHandling(response.data.Code, response.data.Msg)
      return response.data as T
    } catch (error: any) {
      errorHandling(error.response.data.Code, error.response.data.Msg)
      console.error('API Error:', error)
      throw error
    }
  }

  const requestMicro = async <T = any>(params?: Record<string, any>) => {
    try {
      const headers: Record<string, string> = {}
      if (auth.token) {
        headers.Authorization = `Bearer ${auth.token}`
      }
      console.log('API Request:', { params })
      const response = await axios({
        method: 'post',
        url: `${apiMicro}`,
        params: params,
        headers
      })
      // errorHandling(response.data.Code, response.data.Msg)
      return response.data as T
    } catch (error: any) {
      errorHandling(error.response.data.Code, error.response.data.Msg)
      console.error('API Error:', error)
      throw error
    }
  }

  const getInfo = async (cmd: string, params?: Record<string, any>) => {
    const res = await requestGet(cmd, params)
    if (res.Code !== 0) {
      // 返回错误信息
    }
    return res.Content
  }

  const postInfo = async (cmd: string, params?: Record<string, any>) => {
    const res = await requestPost(cmd, params)
    if (res.Code !== 0) {
      // 返回错误信息
    }
    return res.Content
  }

  const postMicro = async (params?: Record<string, any>) => {
    const res = await requestMicro(params)
    if (res.Code !== 0) {
      // 返回错误信息
    }
    return res.Content
  }

  const errorHandling = (code: number, msg: string) => {
    if (code !== 0) {
      tip.updateState(code, msg)
    }
  }

  return { requestLogin, getInfo, postInfo, postMicro }
}