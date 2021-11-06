const $ = (value) => {
    return document.getElementById(value);
};




const headers = ['stt', 'firstname', 'lastname', 'email', 'action'];
const data = [

    {
        stt: "1",
        firstname: "hieu",
        lastname: "trung",
        email: "abc@gmail.com"
    },
    {
        stt: "2",
        firstname: "le",
        lastname: "van",
        email: "zyz@gmail.com"
    },
    {
        stt: "3",
        firstname: "na",
        lastname: "hung",
        email: "cxcx@gmail.com"
    },
    {
        stt: "4",
        firstname: "uh",
        lastname: "yeah",
        email: "aaaa@gmail.com"
    }


];

const createTbHeader = () => {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    headers.forEach((header) => {
        const th = document.createElement('th');
        th.innerHTML = header;
        tr.append(th);
    });

    thead.append(tr);
    return thead;

}
const createButton = (name) => {
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.innerHTML = name;

    return btn;

};
const creatrTbBody = () => {
    const tBody = document.createElement("tbody");
    data.forEach((obj, index) => {

        const tr = document.createElement("tr");
        tr.setAttribute("id", `row${index + 1}`);
        const stttd = document.createElement("td");
        const firstnametd = document.createElement("td");
        const lastnametd = document.createElement("td");
        const emailtd = document.createElement("td");
        const actionTd = document.createElement("td");



        const editBtn = createButton("edit");
        const deleteBtn = createButton("Delete");
        deleteBtn.setAttribute("onclick", `deleteRow(${index + 1})`);


        //set data cho ô
        stttd.innerHTML = obj.stt;
        firstnametd.innerHTML = obj.firstname;
        lastnametd.innerHTML = obj.lastname;
        emailtd.innerHTML = obj.email;
        actionTd.append(editBtn);
        actionTd.append(deleteBtn);





        // append cell to row
        tr.append(stttd);
        tr.append(firstnametd);
        tr.append(lastnametd);
        tr.append(emailtd);
        tr.append(actionTd);


        //gắn tr vô body 
        tBody.append(tr);


    });
    return tBody;

};



const creatTable = () => {
    const table = document.createElement("table");
    const tableHeader = createTbHeader();
    const tBody = creatrTbBody();
    table.append(tableHeader);
    table.append(tBody);


    //styletable 
    table.setAttribute('class', 'table table-striped');

    return table;

};

// thực thi funciton crtb
const form = $("bigform");
const table = creatTable();
form.append(table);
const deleteRow = (index) => {

    const tr = $(`row${index}`);
    tr.remove();

}