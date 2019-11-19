import jquery from 'jquery';
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods';

// COMPONENTS
import Auth from './components/auth';
import Login from './components/login';
import Register from './components/register';
import ToggleMenu from './components/toggle-menu';
import ToggleSpinner from './components/toggle-spinner';

window.$ = jquery;

// FUNCTIONS
$(() => {
	Auth();
	Login();
	Register();
	ToggleMenu();

	$(window).on('load', () => {
		ToggleSpinner();
	});
});
