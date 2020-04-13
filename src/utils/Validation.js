//이메일 검증
export function validateEmail(value) {
	const re =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	return re.test(value);
}
//대소문자 포함하는 8~14자의 비밀번호
export function validatePassword(value) { 
    const re = /^[A-Za-z]\w{8,14}$/;
    return re.test(value);
}
//대소문자숫자 포함 8~14자의 비밀번호
export function validationPasswordNumber(value){
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/;
    return re.test(value)
}
//대소문자 숫자 특문포함 8~14자의 비밀번호
export function validationPasswordSpecial(value)
{
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,14}$/;
    return re.test(value)
}
//공백 체크
export function notEmpty(value)
{
    const re =/^(?!\s*$).+/g;
    return re.test(value);
}
//한글 체크
export function korean(value)
{
    const re = /^[ㄱ-ㅎ가-힣]*$/;
    return re.test(value)
}