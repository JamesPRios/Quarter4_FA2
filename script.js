function generateTable() {
    var rows = document.getElementById("rows").value;
    var cols = document.getElementById("cols").value;
  
    rows = parseInt(rows);
    cols = parseInt(cols);
  
    if (rows < 2 || rows > 10 || cols < 2 || cols > 10) {
      alert("Please enter numbers between 2 and 10");
      document.getElementById("output").innerHTML = "";
      return;
    }
  
    var output = "<table>";
    for (var i = 1; i <= rows; i++) {
      output += "<tr>";
      for (var j = 1; j <= cols; j++) {
        output += "<td>" + (i * j) + "</td>";
      }
      output += "</tr>";
    }
    output += "</table>";
  
    document.getElementById("output").innerHTML = output;
  }
