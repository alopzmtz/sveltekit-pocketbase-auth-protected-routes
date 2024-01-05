import type { AuthModel } from 'pocketbase';
import { writable } from 'svelte/store';

export const userStore = writable<AuthModel | undefined>();
