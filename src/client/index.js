// Importing all styles
import '../client/styles/imports.scss';

//Import Functions
import { formSubmit } from '../client/js/formSubmit';

//Export Functions
export { formSubmit };

document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded.")
    document.getElementById('submit').onclick = formSubmit;
})