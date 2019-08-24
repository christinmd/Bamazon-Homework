var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  loadProducts();
});

function loadProducts() {

  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    promptCustomerForItem(res);
  });
  console.log("Here are all the products available.");

  promptCustomerForItem();
}

function promptCustomerForItem(inventory) {
  inquirer
    .prompt([
      {
        type: "number",
        name: "idChoice",
        message: "What is the ID of the item you would you like to purchase?",
      
      },
      {
        name: "quantity",
        message: "Enter how many of this item would you like to buy?",
        type:"number",
    }


     ]).then(function(response){
    itemID = response.itemID;
    quantity  = response.units;
    placeOrder(response.itemID, response.units);
    });

  

    
    function makePurchase(itemID, QuantityofItems) {
      var query = "SELECT * FROM products WHERE ?"
      connection.query(query, {item_id: itemID}, function(err, data){
        if(err) throw err;   
        if(QuantityofItems >  stock_quantity)
        {
            console.log("Sorry, not enough items available");                
        }
        else {
          stockQuantity -= quantity;
          productSales += quantity;
          var query = "UPDATE products SET stock_quantity = ?, product_sales = ? WHERE item_id=?";
                connection.query(query, [stock_quantity, itemID], function(){
                  if(err) throw err;                    
                })
        }
            connection.end();
        });
    }
}