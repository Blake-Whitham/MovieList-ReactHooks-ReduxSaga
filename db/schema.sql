drop database if exists movies;

create database movies;

drop table movie if EXISTS;

create table movie (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  title CHAR(30) NOT NULL,
  watched INT(3) NOT NULL,
  primary key (id)
);


