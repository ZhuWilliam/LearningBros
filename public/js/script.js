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

// so the above function changes the dir, but some pages have multiple inputs 
function upDataNoRedir(kw) {
    stuff = {};
    stuff[kw] = $('#'+kw).val();
    console.log(kw);
    console.log(stuff[kw]);

    $.post("/ux2update", { stuff: stuff })
}