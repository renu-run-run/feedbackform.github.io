var row = 1;
var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);


function displayDetails(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("blog").value;
    

    if(!name || !age ){
        alert("please fill all the boxes");
        return;
        }
        var display = document.getElementById("display");
        var newRow = display.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
       

        cell1.innerHTML = name;
        cell2.innerHTML = age;
        document.getElementById("name").value = " ";
        document.getElementById("blog").value = " ";

        row++;
}