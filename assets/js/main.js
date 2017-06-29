$(document).ready(function(){

	$('#agregar-tareas').html(localStorage.getItem('listItems'));
	$('#tareas').html(localStorage.getItem('listItemsDos'));

	$('body').keyup(function(e) {

	    if(e.keyCode == 13) {
	    	var tarea = $("#tarea").val();

	        if(tarea == ""){
				alert("Añade una tarea");
			}else{
				$("#agregar-tareas").append('<div class="padre"><input type="checkbox" id="tarea-nueva" class="la-tarea" /><label for="tarea-nueva">' + tarea + '</label><a class="waves-effect waves-light right btn sacar">remove</a><br><div>');
				localStorage.setItem('listItems', $('#agregar-tareas').html());
	        	$("#tarea").val("");	
			}	                
	    }

	    $('.sacar').click(function(){
			$(this).parent().remove();
			localStorage.setItem('listItems', $('#agregar-tareas').html());
			localStorage.setItem('listItemsDos', $('#tareas').html());
		})

		$('[type="checkbox"]').click(function(){

			$($(this).parent()).appendTo("#tareas");
			$(this).remove();
			$("#tareas label").attr("class","label-dos");

			localStorage.setItem('listItemsDos', $('#tareas').html());

		})


	});

});