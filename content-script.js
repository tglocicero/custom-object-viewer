console.log("runnin")

// make the table
var table = document.createElement("anj-table");
table.setAttribute("id", "demo-table-tucker") 
table.innerHTML="<anj-column field='student' /><anj-column field='age' /><anj-column field='school' /><anj-column field='profanity' />";

document.getElementById("cs1").appendChild(table);
function tucker() {
	document.getElementById('demo-table-tucker').dataSource = [
	    {
	        'studentId': 's01',
	        "student": "Butters Stoch",
	        "age": 10,
	        "school": "South Park Elementary",
	        "profanity": "Rare"
	    }
	];
}

// bring in the scripts
var script = document.createElement("script");
script.textContent = "(" + tucker.toString() + "())"
document.body.appendChild(script); 

var anj_theme = document.createElement("link");
anj_theme.setAttribute("href", "https://cdn.zuora.com/theme/1.0.0-rc.6/css/theme.css")
anj_theme.setAttribute("rel", "stylesheet");
document.body.appendChild(anj_theme);

var anjuna_core = document.createElement("script");
anjuna_core.setAttribute("src", "https://cdn.zuora.com/anjuna/1.0.0-beta.11/core/anjuna-core.js")
document.body.appendChild(anjuna_core); 

console.log("ran")
