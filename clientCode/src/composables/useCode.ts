export const useCode = () => {
  const identifyCodes = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let identifyCode = ''

  // 切换验证码   
  const refreshCode = () => {
    identifyCode = ''
    makeCode(4)
    return identifyCode
  }

  // 生成一个随机数
  const makeCode = (l: number) => {
    for (let i = 0; i < l; i++) {
      const randomIndex = Math.floor(Math.random() * identifyCodes.length);
      identifyCode += identifyCodes[randomIndex];
    }
    // return identifyCode
    // console.log(this.identifyCode)
  }

  // const validateVerifycode = (value: string, callback: (error?: Error) => void) => {
  //   if (value === '') {
  //     callback(new Error('请输入验证码'))
  //   } else if (value.toLowerCase() !== identifyCode.toLowerCase()) {
  //     console.log('validateVerifycode:', value);
  //     callback(new Error('验证码不正确!'))
  //   } else {
  //     callback()
  //   }
  // }
  const validateVerifycode = (value: string) => {
    if (value === '') {
      return false
    } else if (value.toLowerCase() !== identifyCode.toLowerCase()) {
      console.log('validateVerifycode:', value);
      return false
    } else {
      return true
    }
  }

  // 初始化验证码
  refreshCode();

  return {
    identifyCode,
    refreshCode,
    validateVerifycode
  }
}