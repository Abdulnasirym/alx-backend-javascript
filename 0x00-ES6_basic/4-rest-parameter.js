export default function returnHowManyArguments(...args) {
	let result = 0;
	for (let arg in args) {
		result = result + 1
	}
	return result
}
