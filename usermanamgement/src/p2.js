// Global variables
const $ = (value) => {
    return document.getElementById(value);
};

const getName = (value) => {
    return document.getElementsByName(value);
};

// Header variables
const headers = [
    "stt",
    "Full name",
    "Age",
    "Email",
    "Gender",
    "BMI",
    "Health status",
    "Actions",
];


const createButton = (name) => {
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.innerHTML = name;
    return btn;
};


const createTableHeader = () => {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.innerHTML = header;
        tr.append(th);
    });
    thead.append(tr);
    return thead;
};


const createTableBody = (personsArr) => {
    const tbody = document.createElement("tbody");
    personsArr.forEach((obj, index) => {
        const tr = document.createElement("tr");
        tr.setAttribute("id", `row${index + 1}`);
        const sttTd = document.createElement("td");
        const fullNameTd = document.createElement("td");
        const ageTd = document.createElement("td");
        const emailTd = document.createElement("td");
        const genderTd = document.createElement("td");
        const bmiTd = document.createElement("td");
        const healthsttTd = document.createElement("td");
        const actionsTd = document.createElement("td");

        const editBtn = createButton("edit");
        editBtn.setAttribute("onclick", `editRow(${index + 1})`);

        const deleteBtn = createButton("Delete");
        deleteBtn.setAttribute("onclick", `deleteRow(${index + 1})`);
        deleteBtn.setAttribute("type", "button");





        // Set content for each cell
        sttTd.innerHTML = index + 1;
        fullNameTd.innerHTML = obj.fullName;
        ageTd.innerHTML = obj.age;
        emailTd.innerHTML = obj.email;
        genderTd.innerHTML = obj.gender;
        bmiTd.innerHTML = obj.BMI;
        healthsttTd.innerHTML = obj.healthStt;
        actionsTd.append(editBtn);
        actionsTd.append(deleteBtn);



        // Push
        tr.append(sttTd);
        tr.append(fullNameTd);
        tr.append(ageTd);
        tr.append(emailTd);
        tr.append(genderTd);
        tr.append(bmiTd);
        tr.append(healthsttTd);
        tr.append(actionsTd);

        tbody.append(tr);
    });
    return tbody;
};

// Create table function
const creatTable = (personsArr) => {
    const table = document.createElement("table");

    const tableHeader = createTableHeader();
    const tBody = createTableBody(personsArr);
    table.append(tableHeader);
    table.append(tBody);


    //styletable 
    table.setAttribute('class', 'table table-striped');
    table.setAttribute("id", "myTable");

    return table;


};


const form = $("bigform");
const table = creatTable(personsArr);
form.append(table);
const deleteRow = (index) => {

    const tr = $(`row${index}`);
    tr.remove();

}

const persons = [];