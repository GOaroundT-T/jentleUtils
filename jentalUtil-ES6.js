/**
 * 数组求字面量相等交集（包含对象,数组）
 * @param {Array} arraya
 * @param {Array} arrayb
 * @returns 返回两数组字面量相等元素数组
 */
export function $arrInterSection(arraya, arrayb) {
	let ao = arraya.filter(a => {
		return typeof a === 'object'
	})
	let an = arraya.filter(a => {
		return !(typeof a === 'object')
	})
	let bo = arrayb.filter(b => {
		return typeof b === 'object'
	})
	let bn = arrayb.filter(b => {
		return !(typeof b === 'object')
	})
	let setbn = new Set(bn)
	let setbo = new Set(bo)
	let reso = ao.filter(a => {
		for (const item of setbo.keys()) {
			return JSON.stringify(a) === JSON.stringify(item)
		}
	})
	let resn = an.filter(a => setbn.has(a))
	return resn.concat(reso)
}

/**
 * 数组求字面量相等交集（不包含对象,数组）
 * @param {Array} arraya
 * @param {Array} arrayb
 * @returns 返回两数组字面量相等元素数组 
 */
export function arrInterSection(arraya, arrayb) {
	let bset = new Set(arrayb)
	return arraya.filter(a => bset.has(a))
}

/**
 * 多数组求交集
 * @param {Array} arrys 
 * @returns 返回多数组相同元素数组
 */
export function arraysInterSection(arrys) {
	forEach((array, index)) {

	}
}

/**
 * 数组浅度去重（无法去重对象,数组）
 * @param {Array} array
 * @@return {Array} 
 */
export function repeatArr(array) {
	return [...(new Set(array))]
}

/**
 * 数组深度去重
 * @param {Array} array
 * @@return {Array} 
 */
export function $repeatArr(array) {
	let temp = {}
	array.filter(item => {
		if (!temp[item]) {
			temp[item] = true
			return true
		}
	})
}

/**
 * 对象或数组深拷贝
 * @param {object or Array} target
 * @returns {object or Array} 返回数组或者对象
 */
export function deepClone(target) {
	var res = Array.isArray(target) ? [] : {}
	if (target && typeof target === 'object') {
		for (key in target) {
			if (target.hasOwnProperty(key)) {
				if (target[key] && typeof target[key] === 'object') {
					res[key] = deepClone(target[key])
				} else {
					res[key] = target[key]
				}
			}
		}
	}
	return res
}

/** 
 *返回数据类型
 */
export function $type(obj) {
	return Object.prototype.toString.call(obj)
		.slice(8, -1)
		.replace(/]/g, "")
		.toLowerCase();
}
/** 
 *判断数据类型
 */
export function $isArray(type) {
	return Object.prototype.toString.call(type) === "[object Array]";
}

export function $isBoolean(type) {
	return Object.prototype.toString.call(type) === "[object Boolean]";
}

export function $isObject(type) {
	return Object.prototype.toString.call(type) === "[object Object]";
}

export function $isString(type) {
	return Object.prototype.toString.call(type) === "[object String]";
}

export function $isexport function(type) {
	return Object.prototype.toString.call(type) === "[object export function]";
}
