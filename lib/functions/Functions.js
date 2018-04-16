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

function is_data(data){
    var er = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{4})$/;
    return er.test(String(data).toLowerCase()); 
}

function inverte_data(str) {
 var data_siopi = str.replace(/[^\d]+/g, '');
 return data_siopi.substr(4,4) + data_siopi.substr(2,2) + data_siopi.substr(0,2);
}

function formata_data(str) {
 var data_siopi = str.replace(/[^\d]+/g, '');
 return data_siopi.substr(6,2)+"/"+data_siopi.substr(4,2)+"/"+data_siopi.substr(0,4);
}

function is_CPF(n){
 var value = n.trim();
 var cpf = value.replace(/[^\d]+/g,''); // elimina .(ponto), -(hifem) e /(barra)
 while(cpf.length < 11) cpf = "0"+ cpf;
 var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
 var a = [];
 var b = 0;
 var c = 11;
 for (var i = 0; i<11; i++){
    a[i] = cpf.charAt(i);
    if (i < 9) b += (a[i] * --c);
    }
    if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }
    b = 0;
    c = 11;
    for (var y=0; y<10; y++) b += (a[y] * c--);
    if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }
    if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) return false;
        return true;
}