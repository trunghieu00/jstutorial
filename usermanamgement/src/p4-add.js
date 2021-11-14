const getByName = (value) => {
    return document.getElementsByName(value);
};
const addBtn = $("addBtn");
$("addNewRow").addEventListener("click", () => {
    const fullNameAdd = $("fullNameInput").value;
    const ageAdd = $("ageInput").value;
    const emailAdd = $("emailInput").value;
    const heightAdd = $("heightInput").value;
    const weightAdd = $("weightInput").value;
    const genderAdd = getByName("genderRadioGroup").value;
    
    const newPerson = new Person(
        fullNameAdd,
        ageAdd,
        emailAdd,
        genderAdd,
        heightAdd,
        weightAdd
    );
  personsArr.push(newPerson);
  const personpp = personsArr.map((obj) => {
        obj.BMI = obj.calculateBMI().toFixed(1);
        obj.healthStt = obj.guessHealth();
        return obj;
    });
  $("myTable").remove();
    const newTable = creatTable(personsArr);
    $("data").append(newTable);

});
