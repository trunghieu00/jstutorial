

const fullNameInputVal = () => {
    const fullNameInput = $("fullNameInput");
    const fullNameMSG = $("fullNameMSG");
    let isNameValid = true;

    if (fullNameInput.value.length > 50) {
        fullNameMSG.innerHTML = `<span class = "text-danger">dài quá </span>`;
        isNameValid = false;
    } else if (fullNameInput.value === "") {
        fullNameMSG.innerHTML = `<span class = "text-danger"> required.</span>`;
    } else {
        fullNameMSG.innerHTML = `<span class = "text-success">Good job</span>`;
    }
    return isNameValid;
};
//valid email
const emailInputVal = () => {
    const emailInput = $("emailInput");
    const emailValue = emailInput.value;
    const regExpEmail = /^[a-zA-Z0-9._%+-]+@((edu)+\.){1}([a-z]{3}\.){1}([a-z]{2})/;
    let isValidEmail = true;

    if (!regExpEmail.test(emailValue)) {
        $("emailMSG").innerHTML = `<span class = 'text-danger'>Your email is invalid!</span>`;
        isValidEmail = false;
    } else {
        $("emailMSG").innerHTML = `<span class = 'text-success'>Good job!</span>`;
    }
    return isValidEmail;
};
const heightVal = () => {
    const heightInput = $("heightInput");
    const heightValue = heightInput.value;
    const regExpHeight = /^[\d]{0,1}\.[\d]{0,2}$/;
    let isValidHeight = true;

    if (!regExpHeight.test(heightValue)) {
        $("heightMSG").innerHTML = `<span class = 'text-danger'>Your height is invalid!</span>`;
        isValidHeight = false;
    } else {
        $("heightMSG").innerHTML = `<span class = 'text-success'>Good job!</span>`;
    }
    return isValidHeight;
};

const weightVal = () => {
    const weightInput = $("weightInput");
    const weightValue = weightInput.value;
    const regExpWeight = /^[\d]{0,2}\.[\d]{1}$/;
    let isValidWeight = true;

    if (!regExpWeight.test(weightValue)) {
        $("weightMSG").innerHTML = `<span class = 'text-danger'>Your weight is invalid!</span>`;
        isValidWeight = false;
    } else {
        $("weightMSG").innerHTML = `<span class = 'text-success'>Good job!</span>`;
    }
    return isValidWeight;
};
