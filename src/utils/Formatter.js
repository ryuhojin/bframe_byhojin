/** 날짜포맷터 */
export function formatDate(value) {
	const date = new Date(value);
	const year = date.getFullYear();
	let month = date.getMonth() + 1;
	month = month > 9 ? month : `0${month}`;
	const day = date.getDate();
	let hours = date.getHours();
	hours = hours > 9 ? hours : `0${hours}`;
	const minutes = date.getMinutes();
	return `${year}-${month}-${day} ${hours}:${minutes}`;
}

/** 천단위 콤마표시 */
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** 콤마제거 */
export function removeComma(x) {
    return x.value.replace(/,/gi,"");
}
