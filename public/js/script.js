function upData(kw, nextpage) {
    stuff = {};
    stuff[kw] = $('#'+kw).val();
    console.log(kw);
    console.log(stuff[kw]);

    $.post("/ux2update",
            { stuff: stuff },
            function(data, textStatus, jqXHR) {
                window.location.href = "/" + nextpage;
            });
};
