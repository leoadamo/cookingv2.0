// VENDOR
import './vendor/jquery';
import jqueryValidation from 'jquery-validation';

// COMPONENTS
import toggleMenu from './components/toggle-menu';
import formValidate from './components/form-validate';

// FUNCTIONS
$(() => {
	toggleMenu();
	formValidate();
});
