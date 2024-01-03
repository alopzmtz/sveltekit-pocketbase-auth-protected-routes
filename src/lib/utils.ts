import type { AuthModel } from 'pocketbase';

export const serializedNonPOJO = (obj: AuthModel) => {
	return structuredClone(obj);
};
