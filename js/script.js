function adicionar() {
    $('#nome_produto').val('');
    $('#preco').val('');
    $('#categoria').val('');

    $('#btn_add').data('id-aleatorio', null); 
    
    $("#modal_cadastro").modal('show');
}

function editar(nome_produto = '', preco = '', categoria = '', id_aleatorio = null) {
    $("#modal_cadastro").modal('show');

    $('#nome_produto').val(nome_produto);
    $('#preco').val(preco);
    $('#categoria').val(categoria);

    $('#btn_add').data('id-aleatorio', id_aleatorio);
}

$('#btn_add').click(function(){
    var nome_produto = $('#nome_produto').val();
    var preco = $('#preco').val() || '0,00'; 
    var categoria = $('#categoria').val() || '---';

    if (!nome_produto) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    var id_aleatorio = $(this).data('id-aleatorio') || Math.floor((Math.random() * 999999) + 1);

    var produto = {
        nome_produto: nome_produto,
        preco: preco,
        categoria: categoria
    };

    var produto_json = JSON.stringify(produto);
    produto_json = produto_json.replace(/"/g, '&quot;'); // Evita problemas com aspas

    var row = $('#row_'+id_aleatorio);

    if (row.length > 0) {
        row.html(
            `
            <td> ${id_aleatorio} </td>
            <td> ${nome_produto} </td>
            <td class="text-center"> R$ ${preco} </td>
            <td class="text-center"> ${categoria} </td>
            <td class="text-center">
                <a type="button" style="font-weight: 500;" class="btn btn-warning" title="Editar" href="javascript:;" onclick="editar(
                    '${nome_produto}',
                    '${preco}',
                    '${categoria}',
                    '${id_aleatorio}'
                )"><span><i class="fa-solid fa-pen"></i> Editar</span></a>
                <a type="button" style="font-weight: 500;" class="btn btn-danger" title="Deletar" href="javascript:;" onclick="deletar(${id_aleatorio});">
                    <span><i class="fa-solid fa-trash"></i> Deletar</span>
                </a>
            </td>`
        );
    } else {
        $('#listagem_produtos').append(
            `<tr id="row_${id_aleatorio}">
                <td> ${id_aleatorio} </td>
                <td> ${nome_produto} </td>
                <td class="text-center"> R$ ${preco} </td>
                <td class="text-center"> ${categoria} </td>
                <td class="text-center">
                    <a type="button" style="font-weight: 500;" class="btn btn-warning" title="Editar" href="javascript:;" onclick="editar(
                        '${nome_produto}',
                        '${preco}',
                        '${categoria}',
                        '${id_aleatorio}'
                    )"><span><i class="fa-solid fa-pen"></i> Editar</span></a>
                    <a type="button" class="btn btn-danger" style="font-weight: 500;" title="Deletar" href="javascript:;" onclick="deletar(${id_aleatorio});">
                        <span><i class="fa-solid fa-trash"></i> Deletar</span>
                    </a>
                </td>
            </tr>`
        );
    }

    $('#nome_produto').val('');
    $('#preco').val('');
    $('#categoria').val('');

    $("#modal_cadastro").modal('hide');
});

function deletar(id_aleatorio){
    $('#row_'+id_aleatorio).remove();
}
