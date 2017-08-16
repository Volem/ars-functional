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

module.exports = {
	compose : compose,
	pipe : pipe,
	clone : clone,
	mixobj : mixobj,
	mixfn : mixfn
};


