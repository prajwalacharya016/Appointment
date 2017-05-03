/**
 * Created by prajw on 5/2/2017.
 */
$(document).ready(function () {
    var getAppointments = function (myarg) {
        $("#output").empty();
        $.ajax({
            url: 'appointment/ajax/',
            data: {
                'txtval': myarg
            },
            dataType: 'json',
            success: function (data) {
                var mydat = data.test;
                var str = "";
                str = str + "<table style=\"width:100%\"> <tr> <th>Date</th> <th>Time</th> <th>Description</th> </tr>";
                for (var i in mydat) {
                    str = str + "<tr>";
                    str = str + "<td>" + mydat[i].date + "</td>";
                    str = str + "<td>" + mydat[i].time + "</td>";
                    str = str + "<td>" + mydat[i].appointment_text + "</td>";
                    str = str + "</tr>";
                }
                str = str + "</table>";
                $("#output").append(str);
            }
        });
    };

    $("#show").click(function () {
        $("#show").hide();
        $("#hide").show();
        $("#hide").css({display: "block"});
    });

    $("#cancel").click(function () {
        $("#show").show();
        $("#hide").hide();
    });

    $('#searchbutton').on('click', function (e) {
        var $link = $(e.target);
        e.preventDefault();
        if (!$link.data('lockedAt') || +new Date() - $link.data('lockedAt') > 300) {
            event.preventDefault();
            var value = $('#searchText').val();
            getAppointments(value);
        }
        $link.data('lockedAt', +new Date());
    });


    $('#searchText').keypress(function (event) {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            alert("Press With Mouse");
        }
        event.stopPropagation();
    });

    getAppointments("");
});