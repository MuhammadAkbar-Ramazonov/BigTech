import { DEC_COUNT, INC_COUNT  } from "./userType";

export const decCount = () => {
	return {
		type: DEC_COUNT,
	};
};

export const incCount = () => {
	return {
		type: INC_COUNT,
	};
};
