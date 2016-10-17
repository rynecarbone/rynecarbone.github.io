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
$(document).ready(function () {
    $.each($("#power_table tr"), function (i, v) {
        var txt = $(this).find("td:nth-child(10)").text();
        document.getElementById('output').innerHTML = txt;
        if (txt == "1") {
            $(this).addClass("row-tier1");
        }else if(txt == "2"){
        	$(this).addClass("row-tier2");
        }else if(txt == "3"){
        	$(this).addClass("row-tier3");
        }else if(txt == "4"){
        	$(this).addClass("row-tier4");
        }else if(txt == "5"){
        	$(this).addClass("row-tier5");
        }
    });
});

