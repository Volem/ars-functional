const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
const clone = (obj) => Object.assign({}, obj);

module.exports = {
	compose : compose,
	pipe : pipe,
	clone : clone
}


