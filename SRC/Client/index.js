// Importing all styles
import '../Client/styles/imports.scss';

//Import Functions
import { formSubmit } from '../Client/js/formSubmit';

//Export Functions
export { formSubmit };

document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded.")
    document.getElementById('submit').onclick = formSubmit;
})