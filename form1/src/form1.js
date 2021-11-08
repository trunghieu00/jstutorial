const $ = (value) => {
    return document.getElementById(value);
};
const getByName = (value) => {
    return document.getElementsByName(value);
};
$("ageRange").addEventListener("change", () => {
    $("agePerform").value = $("ageRange").value;
});


sendbtn.addEventListener('click', () => {
    // validate fullname

    const fullName = document.getElementById("fullNameInput");
    const fullNameMSG = document.getElementById("fullNameMSG");
    const name = fullName.value;
    var matches = name.match(/\b[^\d\s]+\b/g);
    var rexp = /^[a-zA-Z\s]+$/
    if (name.length > 8 && name.length < 50 && matches && matches.length >= 2 && rexp.test(name)) {
        fullNameMSG.innerHTML = "  <span class =  'text-success'> Good job!” </span>  ";
    } else if (name === '' || name === null) {
        fullNameMSG.innerHTML = "  <span class =  'text-danger'> required  </span>  ";
    } else {
        fullNameMSG.innerHTML = "  <span class =  'text-danger'> Your full name is invalid.  </span>  ";
    }

    //validate email
    const emailInput = $("emailInput");
    const emailValue = emailInput.value;
    const regex = /^[a-zA-Z0-9._%+-]+@((edu)+\.){1}([a-z]{3}\.){1}([a-z]{2})/;

    if (regex.test(emailValue)) {
        $('emailMSG').innerHTML = "  <span class =  'text-success'> Good job!” </span>  ";
    } else if (emailValue === "" || emailValue === null) {
        $('emailMSG').innerHTML = "  <span class =  'text-danger'> required </span>  ";
    } else {
        $('emailMSG').innerHTML = "  <span class =  'text-danger'> “We only accept educational emails </span>  ";
    }

    //validate seclect 
    const schoolSelect = $("schoolSelect");
    document.getElementById("schoolSelect").selectedIndex = 4;

    //validate age 
    const ageRange = $("ageRange");
    if (ageRange.value <= 30) {
        $("ageMsg").innerHTML = `<span class = 'text-success'>You’re still young!</span>`;
    } else {
        $("ageMsg").innerHTML = '';
    }
    // validate gender
    const genderRadioGroup = getByName("genderRadioGroup");
    genderRadioGroup.forEach((sigleRadio) => {
        if (sigleRadio.checked) {
            $('genderMSG').innerHTML = ` <span class = 'text-success' > you select options ${sigleRadio.value} </span>  `;
        }
    });

    //value favorite sp
    const fvsMSG = $("fvsMSG");
    const inlineRadioOptions = getByName("inlineRadioOptions");
    const checkedArr = [];
    inlineRadioOptions.forEach((e) => {
        console.log(e.checked);
        checkedArr.push(e.checked);

        if (checkedArr.indexOf(true) === -1) {
            fvsMSG.innerHTML = `<span class ='text-danger'>You should select at least one option.</span>`;
        } else {
            fvsMSG.innerHTML = "";
        }
    });

    // valid tell...
    const tellInput = $("tellInput");
    const tellInputValue = tellInput.value;
    if (tellInputValue === "" || tellInputValue === null) {
        $('tellMSG').innerHTML = ` <span class = 'text-danger' > This field is required  </span>  `;
    } else if (tellInputValue.length > 10 && tellInputValue.length < 100) {
        $('tellMSG').innerHTML = "";
    } else {
        $('tellMSG').innerHTML = ` <span class = 'text-danger' > min length is 10 character    </span>  `;
    }

});
const resetbtn = $("resetbtn");
resetbtn.addEventListener('click', () => {
    $("bigform").reset();
    $("fullNameMSG").innerHTML = "";
    $("emailMSG").innerHTML = "";
    $("tellMSG").innerHTML = "";
    $("fvsMSG").innerHTML = "";
    $("genderMSG").innerHTML = "";
    $("ageMsg").innerHTML = "";
    $("deyMSG").innerHTML = "";



});