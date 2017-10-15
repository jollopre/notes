export const isEmpty = (value) => {
	if (typeof value === 'string') {
		return value.length === 0;
	}
	throw TypeError('string is expected for value param');
};