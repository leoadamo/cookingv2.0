import jquery from 'jquery';
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods';

// COMPONENTS
import ToggleMenu from './components/toggle-menu';
import Login from './components/login';
import Auth from './components/auth';
import Register from './components/register';

window.$ = jquery;

// FUNCTIONS
$(() => {
	Auth();
	Login();
	ToggleMenu();
	Register();
});
