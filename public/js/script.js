function upData(kw, n, nextpage) {
    newData = {};
    var step;
    for (step = 1; step <= n; step++) {
        newData[kw+step] = $('#'+kw+step).val();
        console.log("Updating " + (kw+step) + " with " + newData[kw+step]);
    }

    $.post("/ux2update",
            { newData: newData },
            function(data, textStatus, jqXHR) {
                window.location.href = "/" + nextpage;
            });
};

function cookieClick() {
    $("#hidden-info").attr("style", "display: inline");
}