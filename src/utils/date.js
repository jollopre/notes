const getMonthName = (date) => {
	const monthNames = { 0: 'Jan', 1: 'Feb', 2: 'Mar',
		3: 'Apr', 4: 'May', 5: 'Jun',
		6: 'Jul', 7: 'Aug', 8: 'Sep',
		9: 'Oct', 10: 'Nov', 11: 'Dec' };
	return monthNames[date.getMonth()];
};

const formatNumber = number => number < 10 ? `0${number}` : number.toString();

export const getDate = (timestamp) => {
	const date = new Date(timestamp);
	const day = date.getDate();
	return `${formatNumber(day)} ${getMonthName(date)} ${date.getFullYear()}`;
};

export const getTime = (timestamp) => {
	const date = new Date(timestamp);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	return `${formatNumber(hours)}:${formatNumber(minutes)}`;
}