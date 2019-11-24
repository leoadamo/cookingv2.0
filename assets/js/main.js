import jquery from "jquery";
import "jquery-validation";
import "jquery-validation/dist/additional-methods";
import datepicker from "js-datepicker";

// COMPONENTS
import Auth from "./components/auth";
import Login from "./components/login";
import Register from "./components/register";
import ToggleMenu from "./components/toggle-menu";
import Contact from "./components/contact";
//import DatePicker from "./components/datepicker";

window.$ = jquery;

// FUNCTIONS
$(() => {
	Auth();
	Login();
	Register();
	ToggleMenu();
	Contact();
	//DatePicker();

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
		overlayPlaceholder: "Ano com 4 dígitos"
	});
});
