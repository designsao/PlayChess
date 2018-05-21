"use strict";

$(document).ready(function(){
    $("#verify").click(function(){
        $.ajax({
            type: "POST",
            url: "retry"
        })
        .done(function(data){
            var html = `
            <div class="alert alert-success alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
                <div class="text">Mail successfully sent!</div>
            </div>
            `
            console.log(data['response']);
            $(".success").html(html);
        })
    })
});