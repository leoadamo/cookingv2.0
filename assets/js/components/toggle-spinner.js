export default () => {
	const ToggleSpinner = {
		init: () => {
			ToggleSpinner.bind.call();
		},
		cache: {
			spinner: $('.js-loader-trigger')
		},
		bind: () => {
			ToggleSpinner.functions.handleSpinner();
		},
		functions: {
			handleSpinner: () => {
				ToggleSpinner.cache.spinner.toggleClass('hidden');
			}
		}
	};

	ToggleSpinner.init.call();
};
