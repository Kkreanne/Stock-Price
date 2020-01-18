let stocks = [];

$().ready(() => {

    let parms = getUrlParms();
    get(parms.id)
        .done((response) => {
            stock = response.data;
            console.log("Stock:", response);
            StockCommon.display(stock);
        });

    $("#save").click(() => {
        let stock = StockCommon.save();
        change(stock)
            .done((response) => {
                console.log("Change:", response);
                window.location = "stockPriceList.html";
            })
            .fail((err) => {
                console.log(response);
            });
    });
});