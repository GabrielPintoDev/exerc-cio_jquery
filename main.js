$(document).ready(function () {
    $('form').hide();

    $('#botaoSubmit').click(function () {
        $('form').slideDown();
    });

    $('#botaoCancelar').click(function () {
        $('form').slideUp();
    });

    $('#botaoReset').click(function () {
        location.reload();
    });

    $('#btnAdd').click(function (e) {
        e.preventDefault();
        const task = $('#inputTask').val().trim();

        if (task) {
            const novoItem = $('<li class="tarefa"></li>');
            $(`<p>${task}</p>`).appendTo(novoItem);

            novoItem.click(function () {
                $(this).toggleClass('tarefa-concluida');
            });

            $(novoItem).appendTo('ul');
            $('#inputTask').val('');
        } else {
            alert('Por favor, insira uma tarefa antes de adicionar!');
        }
    });
});
