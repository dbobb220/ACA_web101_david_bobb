$('document').ready(function() {

    // variables

    let $totalCash = $('#totalCash');
    let $multiplier = $('.activate_mult');
    let $autoClick = $('.activate_click');
    let $clickImage = $('.clicker')

    // data info

    var data = {
        availableFunds: 0,
        costClick: 1,
    };

    // dollar sign addition

    $('.cash').on('click', function() {
        data.availableFunds += data.costClick;
        updateReport();
    });

    // update available funds field

    function updateReport() {
        $totalCash.empty();
        $totalCash.append(data.availableFunds);
        if ($multiplier.data('cost') <= data.availableFunds) {
            $multiplier.addClass('active');
        } else {
            $multiplier.removeClass('active');
        };
        if ($autoClick.data('cost') <= data.availableFunds) {
            $autoClick.addClass('active');
        } else {
            $autoClick.removeClass('active');
        };
    };

    // multiplier feature

    $($multiplier, '.active').on('click', function() {
        if ($multiplier.data('cost') <= data.availableFunds) {
            data.availableFunds -= $multiplier.data('cost');
            data.costClick += $multiplier.data('val');
            $('.multiplier').empty();
            $('.multiplier').append('x' + data.costClick);
        }
        updateReport();
    });

    //autoclick feature

    $($autoClick, '.active').on('click', function() {
        if ($autoClick.data('cost') <= data.availableFunds) {
            $clickImage.addClass('rotate_clicker');
            data.availableFunds -= $autoClick.data('cost');
            $autoClick.on('click', function() {});
            updateReport();
        }
        setInterval(function() {
            data.availableFunds += (data.costClick), updateReport()
        }, 10000);
    });

    updateReport();

});