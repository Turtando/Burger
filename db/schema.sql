DROP DATABASE IF EXISTS burgers_db;

-- Create the database movies_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table movies.
CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN, 
  PRIMARY KEY (id)
);