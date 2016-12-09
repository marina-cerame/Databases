CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id integer,
  roomname varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id integer,
  username varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id integer primary key,
  body varchar(145),
  room integer,
  user integer,
  FOREIGN KEY (room) REFERENCES rooms(id),
  FOREIGN KEY (user) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
