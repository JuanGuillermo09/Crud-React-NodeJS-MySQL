create database CrudReact;
use CrudReact;

create table estudiantes(
Id int auto_increment primary key,
Name varchar(20),
Email varchar(30)
);


INSERT INTO estudiantes (id,Name, Email) VALUES (null,'Juan', 'juangui.10323@gmail.com');


