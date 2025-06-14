
/**
 * 验证字符串是否能被JSON.parse成功解析
 * @param value 要验证的值
 * @returns 验证结果对象 {valid: boolean, error?: Error}
 */
export function useJsonValidator(value: unknown) {
  if (typeof value !== 'string') {
    return {valid: false, error: new Error('Input must be a string')}
  }
  
  const str = value.trim()
  if (!str) {
    return {valid: false, error: new Error('Empty string')}
  }

  try {
    JSON.parse(str)
    return {valid: true}
  } catch (e) {
    return {valid: false, error: e instanceof Error ? e : new Error(String(e))}
  }
}

/**
 * 简化的验证方法，只返回布尔值
 * @param value 要验证的值
 * @returns 是否能被JSON.parse解析
 */
export function isJsonParsable(value: unknown): boolean {
  return useJsonValidator(value).valid
}
