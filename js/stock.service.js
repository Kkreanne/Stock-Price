const url = "http://localhost:8080";

const list = () => {
    return $(`${url}/stocks`); 
};

const get = (id) => {
    return $.getJSON(`${url}/stocks/${id}`);  
};

const create = (stock) => {
    return $.ajax({
        method: "POST",                  
        url: `${url}/stocks/${stock.id}`,
        data: JSON.stringify(stock),     
        content: "json",                
        contentType: "application/json"
    });
};

const change = (stock) => {              
    return $.ajax({
        method: "PUT",                  
        url: `${url}/stocks/${stock.id}`, 
        data: JSON.stringify(stock),     
        content: "json",                
        contentType: "application/json"
    });
};

const remove = (stock) => {
    return $.ajax({
            method: "DELETE",
            url: `${url}/stocks/${stock.id}`,
            data: null,
            content: "json",
            contentType: "application/json"
        });
};