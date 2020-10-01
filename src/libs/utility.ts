import { Mission } from '../redux/modules/mission';

export const generateId = (state: Mission[]): number => {
	let id = 1;
	let max = 1;
	if (state.length > 0) {
		state.forEach((item) => {
			if (max < item.id) {
				max = item.id;
			}
		});
		id = max + 1;
	}
	return id;
};

export const getTimestamp = (): number => new Date().getTime();

export const getStringTimestamp = (ms: number): string => {
	const dt = new Date(ms);
	const y = dt.getFullYear();
	const m = ('00' + (dt.getMonth() + 1)).slice(-2);
	const d = ('00' + dt.getDate()).slice(-2);
	const hour = ('00' + dt.getHours()).slice(-2);
	const min = ('00' + dt.getMinutes()).slice(-2);
	const sec = ('00' + dt.getSeconds()).slice(-2);
	return `${y}-${m}-${d} ${hour}:${min}:${sec}`;
};
