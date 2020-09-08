// Modified by moelody.

/**
 * @name isOb
 * @param {String} content
 * @param {String} type
 * @returns {Boolean} is?
 */
export function isType(content, type)
{
  return Object.prototype.toString.call(content) === "[object " + type + "]";
}

/**
 * 随机选择
 * @param {(Object|String)} n
 * @desc get random child from array
 * @return {String} string
 */
export function randomSelection(n) {
	return Array.isArray(n) ? n[Math.floor(Math.random() * n.length)] : n;
}
