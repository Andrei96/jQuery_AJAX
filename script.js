$(document).ready(function () {

    // $("button").click(function() {
    //     $(".result").load("new_file.txt", function(data, statusFile, xhr) {
    //
    //         if(statusFile == "success") {
    //             console.log("file is loaded");
    //         }
    //         else if (statusFile == "error") {
    //             console.log("Error: " + xhr.status + "Message: " + xhr.statusText);
    //         }
    //     });
    // })

    // $("button").click(function () {
    //     $.get("new_file.txt", function (data, statusFile) {
    //         console.log("DATA: " + data + "\nStatus: " + statusFile);
    //     });
    // })

    $("button").click(function () {
        $.get("result.asp",
            {
                name: "Vasya",
                city: "Cherkassy"
            },
            function (data, statusFile) {
            alert("DATA: " + data + "\nStatus: " + statusFile);
        });
    })
});



