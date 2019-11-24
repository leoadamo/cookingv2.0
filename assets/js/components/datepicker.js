export default () => {
	const DatePicker = {
		init: () => {
			DatePicker.bind.init.call();
		},
		cache: {
			input: $(".js-datepicker")
		},
		bind: {
			init: () => {
				DatePicker.functions.setDatePicker();
			}
		},
		functions: {
			setDatePicker: () => {
				datepicker(".js-datepicker", {
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString("pt-br");
						input.value = value;
					},
					startDate: new Date(1980, 0, 1),
					maxDate: new Date(2019, 0, 1),
					startDay: 1,
					customDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
					customMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
					overlayPlaceholder: "Digite um ano com 4 dígitos"
				});
			}
		}
	};

	DatePicker.init.call();
};
