
let stocks = [
    {id: 1, symbol: "PG", name: "P&G", location: "Cincinnati, OH", current: 126.41, paid: 125.11, gain_loss: +1.30, shares: 10, value: 1264.10},
    {id: 2, symbol: "MSFT", name: "Microsoft", location: "Redmond, WA", current: 167.10, paid: 162.34, gain_loss: +4.76, shares: 100, value: 12710.00},
    {id: 3, symbol: "AMZN", name: "Amazon", location: "Bellevue, WA", current: 1884.72, paid: 1888.33, gain_loss: -4.21, shares: 2, value: 3769.44},
];

$().ready(() => {
    listStocks();

    $("#add").click(() => {
        let newId = $("#newId").val();
        let newSymbol = $("#newSymbol").val();
        let newName = $("#newName").val();
        let newLocation = $("#newLocation").val();
        let newCurrent = $("#newCurrent").val();
        let newPaid = $("#newPaid").val();
        let newGains_Loss = $("#newGains_Loss").val();
        let newShares = $("#newShares").val();
        let newValue = $("#newValue").val();
        let user = {
             id: newId, symbol: newSymbol, name: newName, location: newLocation, current: newCurrent, paid: newPaid, gain_loss: newGains_Loss, shares: newShares, value: newValue
        }
        stocks.push(stock);
        listStocks();
    });
});

const listStocks = () => {
    let tbody = $("#stock");
    tbody.html('');
    sort();
    for(let stock of stocks) {
        let id = $(`<td>${stock.id}</td>`);
        let symbol = $(`<td>${stock.symbol}</td>`); 
        let name = $(`<td>${stock.name}</td>`); 
        let location = $(`<td>${stock.location}</td>`); 
        let current = $(`<td>${stock.current}</td>`); 
        let paid = $(`<td>${stock.paid}</td>`); 
        let gain_loss = $(`<td>${stock.gain_loss}</td>`); 
        let shares = $(`<td>${stock.shares}</td>`); 
        let value = $(`<td>${stock.value}</td>`); 
        let tr = $("<tr></tr>");
        tr.append(id);
        tr.append(symbol);
        tr.append(name);
        tr.append(location);
        tr.append(current);
        tr.append(paid);
        tr.append(gain_loss);
        tr.append(shares);
        tr.append(value);
        let td = $("<td></td");
        td.append(`<a href="stockEdit.component.html?id=${stock.id}">Edit</a>`);
        tr.append(td);
        tbody.append(tr);   
    };
    $("#newId").val('');
    $("#newSymbol").val('');
    $("#newName").val('');
    $("#newLocation").val('');
    $("#newCurrent").val('');
    $("#newPaid").val('');
    $("#newGains_Loss").val('');
    $("#newShares").val('');
    $("#newValue").val('');
};