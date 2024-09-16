function adicionar() {
    $('#nome_produto').val('');
    $('#preco').val('');
    $('#categoria').val('');
    $('#marca').val('');

    $('#btn_add').data('id-aleatorio', null); 
    
    $("#modal_cadastro").modal('show');
}

function editar(nome_produto = '', preco = '', categoria = '', marca = '', id_aleatorio = null) {
    $("#modal_cadastro").modal('show');

    $('#nome_produto').val(nome_produto);
    $('#preco').val(preco);
    $('#categoria').val(categoria);
    $('#marca').val(marca);

    $('#btn_add').data('id-aleatorio', id_aleatorio);
}

$('#btn_add').click(function(){
    var nome_produto = $('#nome_produto').val();
    var preco = $('#preco').val() || '0,00'; 
    var categoria = $('#categoria').val(); 
    var marca = $('#marca').val(); 

    if (!nome_produto) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    var id_aleatorio = $(this).data('id-aleatorio') || Math.floor((Math.random() * 999999) + 1);

    var row = $('#row_'+id_aleatorio);
    
    if (row.length > 0) { // editando
        row.html(
            `
            <td> ${nome_produto} </td>
            <td class="text-center"> R$ ${preco} </td>
            <td class="text-center"> ${categoria || '- - -'} </td>
            <td class="text-center"> ${marca || '- - -'} </td>
            <td class="text-center">
                <a type="button" style="font-weight: 500;" class="btn btn-dark" title="Editar" href="javascript:;" onclick="editar(
                    '${nome_produto}','${preco}','${categoria}','${marca}','${id_aleatorio}'
                )"><span><i class="fa-solid fa-pen"></i> </span></a>
                <a type="button" style="font-weight: 500;" class="btn btn-dark" title="Deletar" href="javascript:;" onclick="deletar(${id_aleatorio});">
                    <span><i class="fa-solid fa-trash"></i> </span>
                </a>
            </td>`
        );
    } else { // inserindo
        $('#listagem_produtos').append(
            `<tr id="row_${id_aleatorio}">
                <td> ${nome_produto} </td>
                <td class="text-center"> R$ ${preco} </td>
                <td class="text-center"> ${categoria || '- - -'} </td>
                <td class="text-center"> ${marca || '- - -'} </td>
                <td class="text-center">
                    <a type="button" style="font-weight: 500;" class="btn btn-dark mt-2" title="Editar" href="javascript:;" onclick="editar(
                        '${nome_produto}','${preco}','${categoria}','${marca}','${id_aleatorio}'
                    )"><span><i class="fa-solid fa-pen"></i></span></a>
                    <a type="button" class="btn btn-dark mt-2" style="font-weight: 500;" title="Deletar" href="javascript:;" onclick="deletar(${id_aleatorio});">
                        <span><i class="fa-solid fa-trash"></i></span>
                    </a>
                </td>
            </tr>`
        );
    }

});

function deletar(id_aleatorio){
    $('#row_'+id_aleatorio).remove();
}
