// name: Functions
// outputs: 1
function is_valor(valor){
    var er = /^([1-9]{1}[\d]{0,2}(\.[\d]{3})*(\,[\d]{0,2})?|[1-9]{1}[\d]{0,}(\,[\d]{0,2})?|0(\,[\d]{0,2})?|(\,[\d]{1,2})?)$/;
	 return er.test(String(valor).toLowerCase());
}

function convert_valor(valor) {
 var valor_siopi = parseFloat(valor.replace('.', '').replace(',', '.'));
 return valor_siopi.toFixed();     
}