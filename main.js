$(document).ready(function () {
     //mascara de cep
    $('#cep').mask('00000-000');


    //funcao call api via cep
    $('#cep').blur(function(){

        var valorCampo = $(this).val().replace('-', '');
        console.log(valorCampo);
        $.ajax({
            type: "GET",
            url: "https://viacep.com.br/ws/"+valorCampo+"/json/",
            dataType: "JSON",
            success: function (response) {
                console.log(response);
                $('#end').val(response.logradouro);
                $('#cidade').val(response.localidade);
                $('#uf').val(response.uf);
                $('#bairro').val(response.bairro);
                $('#cep').val(response.cep);
    
            },
            error: function(err){
                window.alert('Deu erro!');
            }
        });
    });

});