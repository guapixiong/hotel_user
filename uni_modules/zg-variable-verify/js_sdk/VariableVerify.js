/**
 * 返回变量类型
 * @param {any} variable 变量
 * @return {string} string | number | object | array | function | undefined | null
 */
export function getType(variable) {
	return Object.prototype.toString.call(variable).slice(8,-1).toLowerCase()
}

/**
 * 是非空数组？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function isArrayNonEmpty(variable) {
	return Array.isArray(variable) && variable.length > 0
}

/**
 * 是对象，且有某个属性（非原型属性）？
 * @param {any} variable 变量
 * @param {string} attribute 属性名称
 * @return {boolean}
 */
export function isObjectHasAttribute(variable, attribute) {
	return this.getType(variable) === "object" && variable.hasOwnProperty(attribute)
}

/**
 * 是非0数字？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function isNumberNotZero(variable) {
	return typeof variable === 'number' && !isNaN(variable) && variable > 0
}

/**
 * 是非空字符串？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function isStringNotEmpty(variable) {
	return typeof variable === 'string' && variable.length > 0
}

/**
 * 是手机号？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyMobile(variable) {
	return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(variable)
}

/**
 * 是密码（6-16位，字母|数字）？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyPassword(variable) {
	return /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,16}/.test(variable)
}

/**
 * 是身份证？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyIdCard(variable) {
	return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(variable)
}

/**
 * 是邮箱？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyEmail(variable) {
	return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(variable)
}

/**
 * 是URL？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyUrl(variable) {
	return /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(variable)
}

/**
 * 是IPV4？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyIP4(variable) {
	return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(variable)
}

/**
 * 是16进制颜色？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyColor16(variable) {
	return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(variable)
}

/**
 * 是日期（YYYY-MM-DD）？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyYMD(variable) {
	return /^\d{4}(\-)\d{1,2}\1\d{1,2}$/.test(variable)
}

/**
 * 是时间（YYYY-MM-DD hh:mm:ss）？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyYMDHMS(variable) {
	return /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/.test(variable)
}

/**
 * 是整数？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyInt(variable) {
	return /^[-+]?\d*$/.test(variable)
}

/**
 * 是小数？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyFloat(variable) {
	return /^[-\+]?\d+(\.\d+)?$/.test(variable)
}

/**
 * 是小数（保留n位）？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyFloatN(variable,n) {
	const reg = new RegExp(`^([1-9]+[\d]*(.[0-9]{1,${n}})?)$`)
	return reg.test(variable)
}

/**
 * 是邮政编号？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyYB(variable) {
	return /^\d{6}$/.test(variable)
}

/**
 * 是QQ号？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyQQNum(variable) {
	return /^[1-9][0-9]{4,10}$/.test(variable)
}

/**
 * 是微信号？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyWXNum(variable) {
	return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(variable)
}

/**
 * 是车牌号？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyCarNum(variable) {
	return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(variable)
}

/**
 * 是中文？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyChinese(variable) {
	return /[\u4E00-\u9FA5]/.test(variable)
}

/**
 * 有img标签？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyHtmlImg(variable) {
	return /<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/ig.test(variable)
}

/**
 * 有html标签？
 * @param {any} variable 变量
 * @return {boolean}
 */
export function verifyHtmlTag(variable) {
	return /<("[^"]*"|'[^']*'|[^'">])*>/g.test(variable)
}
