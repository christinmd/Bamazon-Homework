DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Minature cars", "Toys", 20, 150),
  ("Apple", "Food", 2, 200),
  ("Pool floatie", "Seasonal", 12, 50),
  ("Candle", "Home Goods", 8, 5),
  ("Microphone", "Electronics", 60, 35),
  ("Paper Towels", "Cleaning Supplies", 5, 42)
  ("Dog Food", "Pet Goods", 5, 42)
