// referenced this example: https://svelte.dev/playground/14a03ba29cbc408f8d26904c2f59a985?version=3.46.4

import Spinner from './Spinner.svelte';

export const loader = (node, loading) => {
	let Spin;
	const unsubscribe = loading.subscribe(loadingValue => {
		if (loadingValue) {
			Spin = new Spinner({
				target: node,
				intro: true,
			});

			setTimeout(() => {
				loading.set(false);
			}, 10_000);
		} else {
			if (Spin) {
				Spin.$destroy?.();
				Spin = undefined;
			}
		}
	});

	return () => unsubscribe();
};
