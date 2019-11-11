import jquery from 'jquery';
import Cookies from 'js-cookie';
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods';

// COMPONENTS
import ToggleMenu from './components/toggle-menu';
import Login from './components/login';

window.$ = jquery;

// FUNCTIONS
$(() => {
	ToggleMenu();
	Login();
});
