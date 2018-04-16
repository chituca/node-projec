// name: get Atendimento
// outputs: 1
var chat = msg.chat();
var atendimento = chat.get('atendimento');
var payload = msg.payload;
if (atendimento === "Imovel1"){
   if (is_valor(payload)){
       msg.payload = convert_valor(payload);
       return msg;
    } else{
       msg.payload = "Imovel";
       return msg;
    }
} else { 
    return msg;
}

function is_valor(valor){
    var er = /^([1-9]{1}[\d]{0,2}(\.[\d]{3})*(\,[\d]{0,2})?|[1-9]{1}[\d]{0,}(\,[\d]{0,2})?|0(\,[\d]{0,2})?|(\,[\d]{1,2})?)$/;
	 return er.test(String(valor).toLowerCase());
}

function convert_valor(valor) {
 var valor_siopi = parseFloat(valor.replace('.', '').replace(',', '.'));
 return valor_siopi.toFixed();     
}