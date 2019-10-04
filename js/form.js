function validarForm(formulario) {
	 alert('entro a validar');
	var seleccionado=false;
	
	if(formulario.nombre.value.length==0)
	 {
		 formulario.nombre.focus();
		 alert('No has escrito tu nombre');
		 return false;
	 }
	 if(formulario.apellido.value.length==0)
	 {
		 formulario.apellido.focus();
		 alert('No has escrito tu apellido');
		 return false;
	 }
	  for(var i=0;i<formulario.sexo.length;i++)
	  {
       if(formulario.sexo[i].checked)
		   seleccionado=true;
	   if(!seleccionado)
	   {
		   alert('No has seleccionado el sexo');
		   return false;}
	  }
	 
 }