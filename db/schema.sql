drop database if exists movies;

create database movies;

drop table movie if EXISTS;

create table movie (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  title CHAR(30) NOT NULL,
  release_date CHAR(30) NOT NULL,
  poster_path CHAR(50) NOT NULL,
  overview VARCHAR(1000) NOT NULL,
  watched INT(1) NOT NULL,
  primary key (id)
);


