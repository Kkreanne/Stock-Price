class StockCommon {

    static display = (stock) => {       
        $("#id").val(stock.id);          
        $("#symbol").val(stock.symbol);
        $("#name").val(stock.name);
        $("#location").val(stock.location);
        $("#current").val(stock.current);
        $("#paid").val(stock.paid);
        $("#gain_loss").val(stock.gain_loss);
        $("#shares").val(stock.shares);
        $("#value").val(stock.value);
    };

    static save = () => {
        let stock = {};                                 
        stock.id = $("#id").val();                      
        stock.symbol = $("#symbol").val();          
        stock.name = $("#name").val();        
        stock.location = $("#location").val();          
        stock.current = $("#current").val();          
        stock.paid = $("#paid").val();    
        stock.gain_loss = $("#gain_loss").val();                
        stock.shares = $("#shares").val();      
        stock.value = $("#value").val();
        return stock;
    };
};