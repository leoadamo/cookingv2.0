// VENDOR
import './vendor/jquery';
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods';

// COMPONENTS
import toggleMenu from './components/toggle-menu';
import formValidate from './components/form-validate';

// FUNCTIONS
$(() => {
	toggleMenu();
	formValidate();
});
