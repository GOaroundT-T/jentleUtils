/**
 * 数组求字面量相等交集（包含对象,数组）
 * @param {Array} arraya
 * @param {Array} arrayb
 * @returns 返回两数组字面量相等元素数组
 */
function $arrInterSection(arraya, arrayb) {
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
function arrInterSection(arraya, arrayb) {
	let bset = new Set(arrayb)
	return arraya.filter(a => bset.has(a))
}

/**
 * 多数组求交集
 * @param {Array} arrys 
 * @returns 返回多数组相同元素数组
 */
function arraysInterSection(arrys) {
	forEach((array, index)) {

	}
}

/**
 * 数组浅度去重（无法去重对象,数组）
 * @param {Array} array
 * @@return {Array} 
 */
function repeatArr(array) {
	return [...(new Set(array))]
}

/**
 * 数组深度去重
 * @param {Array} array
 * @@return {Array} 
 */
function $repeatArr(array) {
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
function deepClone(target) {
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
function $type(obj) {
	return Object.prototype.toString.call(obj)
		.slice(8, -1)
		.replace(/]/g, "")
		.toLowerCase();
}
/** 
 *判断数据类型
 */
function $isArray(type) {
	return Object.prototype.toString.call(type) === "[object Array]";
}

function $isBoolean(type) {
	return Object.prototype.toString.call(type) === "[object Boolean]";
}

function $isObject(type) {
	return Object.prototype.toString.call(type) === "[object Object]";
}

function $isString(type) {
	return Object.prototype.toString.call(type) === "[object String]";
}

function $isFunction(type) {
	return Object.prototype.toString.call(type) === "[object Function]";
}
/**
 * gmt时间转 yyyy-mm-dd hh:mm:ss
 */
function DateFormat(time) {
  let date = new Date(time)
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}