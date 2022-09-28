/***********************
 *                       *
 *                       *
 *   reudce  归并方法    *
 *                       *
 *                       *
 * **********************/

/** 
 * arr.reduce(callback,initialValue)
 * callback = function(
 *  previousValue(上一次调用回调返回的值，或者初始值initialValue)
 *  ,currentValue(当前操作的元素)
 *  ,index(当前操作的元素在数组中的下标)
 *  ,array(当前操作数组本身)
 * ){}
 */


/**
 * 去重数组
 */
function repeatArr(arr) {
	return arr.reduce((pre, cur) => {
		if (!pre.includes(cur)) {
			return pre.push(cur)
			//return pre.concat(cur)
		} else {
			return pre
		}
	}, [])
}


/**
 * 记录数组中元素出现次数
 */
function repetitions(arr) {
	return arr.reduce((pre, cur) => {
		if (cur in pre) {
			pre[cur]++
		} else {
			pre[cur] = 1
		}
		return pre
	}, {})
}

/**
 * 二维数组变一维数组
 */
function flatArr(arr) {
	return arr.reduce((pre, cur) => {
		return pre.concat(cur)
	}, [])
}
