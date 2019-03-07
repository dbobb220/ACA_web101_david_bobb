$(function() {

    let $list = $('ul');
    let $newItemForm = $('#newItemForm');
    let $close = $('.close');

    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        let text = $('input[type="text"]').val();
        $list.append(`<li>${text}<span class="close">-</span></li>`);
        $('input[type="text"]').val('');
    });
    
    $list.on('click', 'li', function() {
    let $this = $(this);
    $this.addClass('checked');
    });

    
});