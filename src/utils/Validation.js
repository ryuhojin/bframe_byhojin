// 이메일 검증
export function validateEmail (value) {
  const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  return re.test(value)
}
// 대소문자 포함하는 8~14자의 비밀번호
export function validatePassword (value) {
  const re = /^[A-Za-z]\w{8,14}$/
  return re.test(value)
}
// 대소문자숫자 포함 8~14자의 비밀번호
export function validationPasswordNumber (value) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/
  return re.test(value)
}
// 대소문자 숫자 특문포함 8~14자의 비밀번호
export function validationPasswordSpecial (value) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,14}$/
  return re.test(value)
}
// 공백 체크
export function notEmpty (value) {
  const re = /^(?!\s*$).+/g
  return re.test(value)
}
// 한글 체크
export function korean (value) {
  const re = /^[ㄱ-ㅎ가-힣]*$/
  return re.test(value)
}
// 참인지 체크
export function TrueCheck (value) {
  const re = /^([Tt][Rr][Uu][Ee])$/
  return re.test(value)
}
// 거짓인지 체크
export function FalseCheck (value) {
  const re = /^([Ff][Aa][Ll][Ss][Ee])$/
  return re.test(value)
}
// 현재보다 미래인지 체크
export function FutureCheck (value) {
  var now = new Date()
  var check = new Date(value)

  var gap = now.getTime() - check.getTime()

  if (gap > 0) {
    return false
  } else {
    return true
  }
}
// 현재보다 과거인지 체크
export function OldCheck (value) {
  var now = new Date()
  var check = new Date(value)

  var gap = now.getTime() - check.getTime()

  if (gap > 0) {
    return true
  } else {
    return false
  }
}
// 올바른 URL주소인가 체크
export function URLCheck (value) {
  const re = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  re.test(value)
}

// 널체크
export function Nullcheck (value) {
  const re = /^$/
  re.test(value)
}
// 정규식 체커
export function regexTester (regex, value) {
  if (value.match(regex)) {
    return true
  } else {
    return false
  }
}
// 안전한 정수 범위를 벗어나는지 체크
export function integerScope (value) {
  if (Number.MIN_SAFE_INTEGER <= value && Number.MAX_SAFE_INTEGER) {
    return true
  } else {
    return false
  }
}
