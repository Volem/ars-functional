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

module.exports = {
	compose : compose,
	getPropVal : getPropertyValue,
	pipe : pipe,
	clone : clone,
	mixobj : mixobj,
	mixfn : mixfn,
	filter : filter,
	map : map
};


