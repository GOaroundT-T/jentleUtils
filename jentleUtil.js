/**
 * 数组求字面量相等交集
 * @param {Array} arraya
 * @param {Array} arrayb
 * @returns 返回两数组字面量相等元素数组
 */
function arrayInterSection(arraya, arrayb) {
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
 * 多数组求交集
 * @param {Array} arrys 
 * @returns 返回多数组相同元素数组
 */
function arraysInterSection(arrys) {
	forEach((array, index)) {

	}
}

/**
 * 数组去重
 * @param {Array} array
 * @@return {Array} 返回去重后数组
 */
function repeatArray(array) {
	return [...(new Set(array))]
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
