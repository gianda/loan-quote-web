var URL = 'http://localhost:8080';

$(document).ready(function() {
    $('#loan-form').submit(calculate_loan_quote);
    $('#loan-button').click(show_loan_form);
    $('#error').click(hide_error);
});

function hide_error() {
    $('#error').hide(200);
}

function show_loan_form() {
    $('#loan-button').hide(200);
    $('#loan-form-div').show(200);
}

function calculate_loan_quote() {
    $('#loan-result').hide(200);
    $('#error').hide(200);
    var loanamount = convert($('#loan-amount').val());
    if (loanamount !== '') {
        $('#spinner').show(200);
        $.ajax({
            url: URL + '/loanquote',
            method: 'GET',
            success: show_loan_quote,
            error: on_error,
            data: {
                loanamount: loanamount
            },
        });
    }
    return false;
}

function show_loan_quote(data) {
    //var tmpData = JSON.parse(data);
    var formattedData = JSON.stringify(data, null, '\t');
    $('#spinner').hide(200);
    $('#loan-result').show(200);
    $('#output').text(formattedData);
}

function on_error(data) {
    $('#spinner').hide(200);
    $('#error').show(200);
    $('#error').text(data.responseJSON.message);
}

function convert(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    return str;
}