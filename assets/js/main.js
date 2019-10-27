// VENDOR
import './vendor/jquery';

// COMPONENTS
import toggleMenu from './components/toggle-menu';
import formValidate from './components/form-validate';

// FUNCTIONS
$(() => {
	toggleMenu();
	formValidate();
});
