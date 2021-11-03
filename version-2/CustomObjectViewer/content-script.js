///////////////////////
// ACCOUNT PAGE //
///////////////////////
if (window.location.href.match(/CustomerAccount/) !== null) {
	var table = document.createElement("anj-container");
	table.setAttribute("gutter", 2)
	table.innerHTML="<anj-tabs id='tabs-demo'> <anj-tab id='anj-tab-tucker' href='#demo-table-tucker'>PricingTable</anj-tab> <anj-tab id='anj-tab-tucker2' href='#demo-table-tucker2'>Devices</anj-tab> </anj-tabs> <anj-table row-key='Id' orderable='true' sizable='true' id='demo-table-tucker' > <anj-state-store key='records' type='session'></anj-state-store> <anj-filter slot='filter' placeholder='Filter'></anj-filter> <anj-column-pinner></anj-column-pinner> <anj-table-message slot='footer-message'>No records.</anj-table-message> <anj-pager slot='footer' info='true' first-last='true' sizes='[10, 20, 30]' ></anj-pager> </anj-table> <anj-table row-key='Id' orderable='true' sizable='true' id='demo-table-tucker2' style='display:none' > <anj-state-store key='records' type='session'></anj-state-store> <anj-filter slot='filter' placeholder='Filter'></anj-filter> <anj-column-pinner></anj-column-pinner> <anj-table-message slot='footer-message'>No records.</anj-table-message> <anj-pager slot='footer' info='true' first-last='true' sizes='[10, 20, 30]' ></anj-pager> </anj-table>";
	document.getElementsByClassName('z-column-2-A-content')[0].appendChild(table);

	function populateTable() {
		var xhttp = new XMLHttpRequest();
		var x = 0;
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	definitions = JSON.parse(xhttp.responseText)['definitions'];

				// for each defition
				var definitions_keys = Object.keys(definitions);
				for (var i = 0; i < definitions_keys.length; i++) {
					var relationships = definitions[definitions_keys[i]].schema.relationships;
					// if it has relationships
					if (relationships !== undefined) {
						// for each of those relationships
						for (var j = 0; j < relationships.length; j++) {
							// if its related to the current page we're on
							if (relationships[j].object == "account") {
								// get the dang records for that definition
								getRecords(definitions_keys[i], x);
								x = -1;
							}
						}
					}
				}
		    }
		};
		xhttp.open("GET", "https://apisandbox.zuora.com/platform/data-models/gateway/objects/definitions/default", true);
		xhttp.send();

		function getRecords(definition, x) {
			var xhttp1 = new XMLHttpRequest();
			xhttp1.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
			    	if (x == 0) {
				    	records = JSON.parse(xhttp1.responseText)['records'];
				    	columns = Object.keys(records[0]);
				    	document.getElementById('demo-table-tucker').columns = columns;
				    	document.getElementById('demo-table-tucker').dataSource = records;
				    } else {
				    	records = JSON.parse(xhttp1.responseText)['records'];
				    	columns = Object.keys(records[0]);
				    	document.getElementById('demo-table-tucker2').columns = columns;
				    	document.getElementById('demo-table-tucker2').dataSource = records;
				    }
			    }
			};
			xhttp1.open("GET", "https://apisandbox.zuora.com/platform/data-models/gateway/objects/records/default/" + definition, true);
			xhttp1.send();
		}
	}
	var script = document.createElement("script");
	script.textContent = "(" + populateTable.toString() + "())";
	document.body.appendChild(script);

	function toggleTabs() {
		if (document.getElementById('demo-table-tucker').style.display === 'none') {
			document.getElementById('demo-table-tucker').style.display = 'block'
		} else {
			document.getElementById('demo-table-tucker').style.display = 'none'
		}
		if (document.getElementById('demo-table-tucker2').style.display === 'none') {
			document.getElementById('demo-table-tucker2').style.display = 'block'
		} else {
			document.getElementById('demo-table-tucker2').style.display = 'none'
		}
	}
	document.getElementById('anj-tab-tucker').onclick = toggleTabs;
	document.getElementById('anj-tab-tucker2').onclick = toggleTabs;


	var anj_theme = document.createElement("link");
	anj_theme.setAttribute("href", "https://cdn.zuora.com/theme/1.0.0-rc.6/css/theme.css");
	anj_theme.setAttribute("rel", "stylesheet");
	document.body.appendChild(anj_theme);

	var anjuna_core = document.createElement("script");
	anjuna_core.setAttribute("src", "https://cdn.zuora.com/anjuna/1.0.0-beta.11/core/anjuna-core.js");
	document.body.appendChild(anjuna_core); 
}

//////////////////
// SUBSCRIPTION PAGE //
//////////////////
if (window.location.href.match(/Subscription/) !== null) {
	var table = document.createElement("anj-container");
	table.setAttribute("gutter", 2)
	table.innerHTML="<anj-tabs id='tabs-demo'> <anj-tab id='anj-tab-tucker' href='#demo-table-tucker'>Devices</anj-tab> </anj-tabs> <anj-table row-key='Id' orderable='true' sizable='true' id='demo-table-tucker' > <anj-state-store key='records' type='session'></anj-state-store> <anj-filter slot='filter' placeholder='Filter'></anj-filter> <anj-column-pinner></anj-column-pinner> <anj-table-message slot='footer-message'>No records.</anj-table-message> <anj-pager slot='footer' info='true' first-last='true' sizes='[10, 20, 30]' ></anj-pager> </anj-table>";
	document.getElementById("cs1").appendChild(table);

	function populateTable() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	definitions = JSON.parse(xhttp.responseText)['definitions'];

				// for each defition
				var definitions_keys = Object.keys(definitions);
				for (var i = 0; i < definitions_keys.length; i++) {
					var relationships = definitions[definitions_keys[i]].schema.relationships;
					// if it has relationships
					if (relationships !== undefined) {
						// for each of those relationships
						for (var j = 0; j < relationships.length; j++) {
							// if its related to the current page we're on
							if (relationships[j].object == "subscription") {
								// get the dang records for that definition
								getRecords(definitions_keys[i]);
							}
						}
					}
				}
		    }
		};
		xhttp.open("GET", "https://apisandbox.zuora.com/platform/data-models/gateway/objects/definitions/default", true);
		xhttp.send();

		function getRecords(definition) {
			var xhttp1 = new XMLHttpRequest();
			xhttp1.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
			    	records = JSON.parse(xhttp1.responseText)['records'];
			    	columns = Object.keys(records[0]);
			    	document.getElementById('demo-table-tucker').columns = columns;
			    	document.getElementById('demo-table-tucker').dataSource = records;
			    }
			};
			xhttp1.open("GET", "https://apisandbox.zuora.com/platform/data-models/gateway/objects/records/default/" + definition, true);
			xhttp1.send();
		}
	}
	var script = document.createElement("script");
	script.textContent = "(" + populateTable.toString() + "())";
	document.body.appendChild(script);

	var anj_theme = document.createElement("link");
	anj_theme.setAttribute("href", "https://cdn.zuora.com/theme/1.0.0-rc.6/css/theme.css");
	anj_theme.setAttribute("rel", "stylesheet");
	document.body.appendChild(anj_theme);

	var anjuna_core = document.createElement("script");
	anjuna_core.setAttribute("src", "https://cdn.zuora.com/anjuna/1.0.0-beta.11/core/anjuna-core.js");
	document.body.appendChild(anjuna_core); 
}
