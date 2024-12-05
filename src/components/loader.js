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
			}, 8000);
		} else {
			if (Spin) {
				Spin.$destroy?.();
				Spin = undefined;
			}
		}
	});

	return () => unsubscribe();
};
