const $ = (value) => {
    return document.getElementById(value);

};
const getByName = (value) => {
    return document.getElementsByName(value);

};

// listen 
const registerbtn = document.getElementById('registerbtn');
registerbtn.setAttribute("disabled", "");

registerbtn.addEventListener('click', () => {
    // validate email input
    const emailInput = document.getElementById('emailInput');
    const emailMSG = document.getElementById('emailMSG');


    if (emailInput.value.indexOf('@') === -1) {

        emailMSG.innerHTML = "  <span class =  'text-danger'> điền lại nào </span>  ";

    } else {

        emailMSG.innerHTML = "  <span class =  'text-success'> quá đỉnh  </span>  ";

    }


    const phoneInput = $('phoneInput');
    const phoneValue = phoneInput.value;
    const reExPattern = /(\(\+\d{2}\))?(\d{3,4})\-(\d{3})\-(\d{3})/;



    if (!reExPattern.test(phoneValue)) {
        $('phoneMSG').innerHTML = "  <span class =  'text-danger'> điền lại nào </span>  ";


    } else {
        $('phoneMSG').innerHTML = "  <span class =  'text-success'> quá đỉnh  </span>  ";


    }


    const countrySelect = $('countrySelect');


    if (countrySelect.value === "0") {
        $('countryMSG').innerHTML = "  <span class = 'text-danger'> điền lại nào </span>  ";


    } else {
        $('countryMSG').innerHTML = "  <span class = 'text-success'> quá đỉnh  </span>  ";


    }



    const contactRadioGroup = getByName("contactRadioGroup");

    contactRadioGroup.forEach((sigleRadio) => {
        if (sigleRadio.checked) {
            $('contactMSG').innerHTML = `  <span class = 'text-success' > you select options ${sigleRadio.value} < /span>  `;
        }
    });

});
const acceptCheckbox = $("acceptCheckbox");
acceptCheckbox.addEventListener('click', () => {
    if (acceptCheckbox.checked) {
        registerbtn.removeAttribute("disabled");
    }
    if (!acceptCheckbox.checked) {
        registerbtn.setAttribute("disabled", "");
    }
});
const resetbtn = $("resetbtn");
resetbtn.addEventListener('click', () => {
    $("registerform").reset();
    $("emailMSG").innerHTML = "";
    $("phoneMSG").innerHTML = "";
    $("countryMSG").innerHTML = "";
    $("contactMSG").innerHTML = "";


});