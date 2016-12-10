
DROP DATABASE IF EXISTS chat;


CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  id integer NOT NULL AUTO_INCREMENT,
  username varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id integer NOT NULL AUTO_INCREMENT,
  body varchar(145),
  room varchar(50),
  user varchar(50),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:

 *    mysql -u root - p <server/schema.sql
 *  to create the database and the tables.*/
