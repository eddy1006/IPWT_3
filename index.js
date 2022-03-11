function myCreateFunction() {
  var table = document.getElementById('myTable');
  console.log(table.rows.length);
  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = $("input[name=title]").val();
  cell2.innerHTML = $("input[name=rating]").val();
  cell3.id = table.length;
  cell3.innerHTML = "<button onclick='myDeleteFunction()' class='button-delete' >Delete</button>";
  if (table.rows.length % 2 == 0) {
    console.log(table.rows.length);
    row.setAttribute("style", "background-color : #f2f3f4");
  }
}

function myDeleteFunction() {
  $('table').on('click', 'button', function(e) {
    $(this).closest('tr').remove()
  })
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
