const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
const clone = (obj) => Object.assign({}, obj);
const mixobj = (...objs) => Object.assign({}, ...objs);
const mixfn = (obj = {}, ...fns) => {
	return fns.reduce((result, cur) => {
		result[cur.name] = cur;
		return result;
	}, obj);
};
const filter = fn => data => Array.prototype.filter.call(data, fn);
const map = fn => data => Array.prototype.map.call(data, fn);
const getPropertyValue = (propertyName = '') => (obj = Object) => {
	return obj.hasOwnProperty(propertyName) ? obj[propertyName] : undefined;
};

const predicateDefault = (val) => {
	return val | true;
};

const removeBy = (predicate = predicateDefault) => (howMany = 1) => (arr = Array(0)) => {
	let counter = 0;
	let arrClone = [...arr];
	for (let i = 0; i < arrClone.length; i++) {
		if (predicate(arrClone[i]) && (!howMany || counter < howMany)) {
			counter++;
			arrClone.splice(i, 1);
		}
		if (howMany && counter == howMany) {
			break;
		}
	}
	return arrClone;
};

module.exports = {
	compose : compose,
	getPropVal : getPropertyValue,
	pipe : pipe,
	clone : clone,
	mixobj : mixobj,
	mixfn : mixfn,
	filter : filter,
	map : map,
	removeBy : removeBy
};


