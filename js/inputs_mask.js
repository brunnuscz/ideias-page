$(document).ready(function() {
    // FORMANTAÇÕES 
    $('.number-mask').mask('0#');
    $('.percent-mask').mask('#0,00');
    $('.year-mask').mask('9999');
    $(".fone").mask("(99)9999-9999");
    $(".celular").mask("(99)99999-9999");
    $(".data").mask("99/99/9999");
    $(".cpf").mask("999.999.999-99");
    $('.cep').mask('00000-000');
    $(".cnpj").mask("99.999.999/9999-99");
    $('.cpf-cnpj-mask').on('change keyup', function () {
        let cpfcnpj = $(this).val().replace(/\D/g,'');
        let masks = ['000.000.000-000', '00.000.000/0000-00'];
        let mask = (cpfcnpj.length > 11) ? masks[1] : masks[0];
        $(this).mask(mask);
    });
    $('.money-mask').on('change keyup', function () {
        $(this).mask("#.##0,00", {reverse: true});
    })
    $(".moeda").maskMoney({symbol:'', showSymbol:true, thousands:'.', decimal:',',symbolStay: true,allowZero: true,defaultZero: false});
});