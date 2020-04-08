export function validateEmail(value) {
	const re = /\S+@\S+\.\S+/;
	return re.test(value);
}

export function validatePassword(value) {
	return value.length >= 8;
}

export function notEmpty(value)
{
    if(value)
    {
        return true
    }
    else{
        return false
    }
}