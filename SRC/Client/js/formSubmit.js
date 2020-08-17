import getTripInfo from './app';
import { newTrip } from './newTrip';
async function formSubmit(event) {
    console.info(':::Validating form submission:::');
    event.preventDefault();
    let dep = document.getElementById('depInput').value;
    let dest = document.getElementById('destInput').value;
    let date = document.getElementById('date').value;

    let info = {
        dep: dep,
        dest: dest,
        date: date
    };

    let tripData;
    console.info(dep, dest, date);

    //Validate Form Input
    const regInput = /[a-zA-Z]+/;
    const regDate = /^(202\d{1})-(\d{1,2})-(\d{1,2})$/g;

    //Verify Date is In Future
    const verifyDate = (date) => {
        let newDate = new Date(date);
        let today = new Date();
        return newDate - today > 0;
    };
    // Verify All Inputs
    if (!dep.match(regInput) || !dest.match(regInput) || !date.match(regDate) || !verifyDate(date)) {
        alert('Please input valid data!');
        return false;
    }


    console.info('::: Input valid, Submitting form! :::')

    tripData = await getTripInfo(info).then((res) => {
        newTrip(res);



        console.log(res);
        return res;
    });
    //Come back and add function to save data.

};

export { formSubmit };