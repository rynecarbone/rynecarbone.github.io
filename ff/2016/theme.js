$(document).ready( function () {
    $('#power_table').DataTable({
				"paging": false,
				"info"  : false,
				columnDefs:[
					{ targets:[9],orderData:[9,0]}
				]

			});
} );
