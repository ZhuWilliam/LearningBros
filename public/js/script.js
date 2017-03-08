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

function showHint() {
    //$("#hidden-info").attr("style", "display: inline");
    var hiddenHints = document.getElementById('hidden-info');
    if (hiddenHints.style.display === 'none') {
        hiddenHints.style.display = 'block';
    } else {
        hiddenHints.style.display = 'none';
    }
}

function showSteps() {
    //$("#hidden-steps").attr("style", "display: inline");
    var hiddenSteps = document.getElementById('hidden-steps');
    if (hiddenSteps.style.display === 'none') {
        hiddenSteps.style.display = 'block';
    } else {
        hiddenSteps.style.display = 'none';
    }
}

/*********************** Home Screen Nav Button ****************************/

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/***************************************************************************/