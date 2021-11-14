const typeSelect = $("searchType");
const searchInput = $("searchInput");

const searchArr = [];

const searchFunction = () => {
    const searchValue = searchInput.value;
    const searchedType = typeSelect.value;

    personsArr.forEach((e) => {
        if (e[searchedType] === searchValue) {
            searchArr.push(e);
        }
    });


    $("myTable").remove();
    const newTable = creatTable(searchArr);
    form.append(newTable);
};