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

// so the above function changes the dir, but some pages have multiple inputs 
function upDataNoRedir(kw) {
    stuff = {};
    stuff[kw] = $('#'+kw).val();
    console.log(kw);
    console.log(stuff[kw]);

    $.post("/ux2update", { stuff: stuff })
}
