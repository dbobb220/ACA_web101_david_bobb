$(function() {

    let $list = $('ul');
    let $newItemForm = $('#newItemForm');
    let $listItem = $('li');

    /// add submission to list

    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        let text = $('input[type="text"]').val();
        $list.append(`<li>${text}<span class="close">-</span></li>`);
        $('input[type="text"]').val('');
    });

    /// check completed task when clicked

    $list.on('click', 'li', function() {
        let $this = $(this);
        $this.addClass('checked');
    });

    /// delete listed item

    $(document).on('click', '.close', function() {
        let $this = $(this);
        $this.parent().remove();
    });  
    
});