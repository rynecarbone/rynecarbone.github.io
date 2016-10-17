$(document).ready( 
		function () {
    	$('#power_table').DataTable(
			    { "paging": false,
				    "info"  : false,
				     columnDefs:[
					     { targets:[9],orderData:[9,0]}
				     ]
		    	}
		  );
	 }
	 
);
$(document).ready(function(){
	 	  var table = document.getElementById("power_table");
			table.getElementsByTagName("tr").each(function(){
				  var col_val = $(this).find("td:eq(9)").text();
					window.alert(col_val);
					if(col_val == "1"){
						$(this).addClass('row-tier1');
					}
					else if(col_val == "2"){
						$(this).addClass('row-tier2');
					}
					else if(col_val == "3"){
						$(this).addClass('row-tier3');
					}
					else if(col_val == "4"){
						$(this).addClass('row-tier4');
					}
					else if(col_val == "5"){
						$(this).addClass('row-tier5');
					}
			});
	 }
);
