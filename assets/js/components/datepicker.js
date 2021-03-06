import datepicker from "js-datepicker";

export default () => {
	const DatePicker = {
		init: () => {
			DatePicker.bind.init.call();
		},
		cache: {},
		bind: {
			init: () => {
				DatePicker.functions.setDatePicker();
			}
		},
		functions: {
			setDatePicker: () => {
				if ($(".js-datepicker").length) {
					datepicker(".js-datepicker", {
						onHide: instance => {
							$(instance.el).valid();
						},
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
		}
	};

	DatePicker.init.call();
};
