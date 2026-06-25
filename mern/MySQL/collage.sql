CREATE DATABASE Collage;

CREATE TABLE Teacher(
id int primary key,
name varchar(15) not null,
subject varchar(10) ,
salary int
);

INSERT into teacher (id,name, subject, salary)
values (23,"ajay", "Math", 50000),
(47,"Bharat","English",60000),
(18,"Chetan","Chemistry",45000),
(9,"Divya","physics",75000);

SELECT * FROM Teacher;

SELECT NAME, salary FROM Teacher WHERE salary > 55000; 

ALTER TABLE TEACHER change column salary CTC varchar(10) not null;

ALTER TABLE TEACHER DROP column ctc;

ALTER TABLE TEACHER ADD CTC int NOT NULL;

SELECT * FROM TEACHER;

UPDATE TEACHER SET CTC = 50000 WHERE ID = 23;
UPDATE TEACHER SET CTC = 60000 WHERE ID = 47;
UPDATE TEACHER SET CTC = 45000 WHERE ID = 18;
UPDATE TEACHER SET CTC = 75000 WHERE ID = 9;

SELECT * FROM TEACHER;

SET SQL_SAFE_UPDATES = 0;

UPDATE TEACHER 
SET CTC = CTC+CTC* 0.25;

SELECT * FROM TEACHER;

ALTER TABLE teacher 
ADD COLUMN CITY varchar(10) default  "Gurgaon";

SELECT * FROM teacher;

ALTER TABLE teacher DROP column CTC;

SELECT * FROM teacher;

CREATE TABLE studentinfo(
roll_no int primary key,
name varchar (20) not null,
city varchar (15) not null,
marks INT not null
);

SELECT * FROM studentinfo;

INSERT INTO studentinfo (
roll_no, name, city, marks )
values 
(110, "Adam","Delhi",76),
(108,"BOB","Mumbai", 65),
(124,"casey","Pune",94),
(112,"duke","pune",80);

SELECT * from studentinfo;

SELECT roll_no,name, marks FROM studentinfo WHERE marks > 75;

SELECT name, city FROM studentinfo;

SELECT MAX(marks) 
from studentinfo
group by city;

SELECT AVG(marks) FROM studentinfo;

ALTER TABLE studentinfo 
ADD Grade varchar(2) not null;

UPDATE studentinfo SET grade = "o" WHERE MARKS >= 80;

UPDATE studentinfo SET Grade = "A" WHERE marks >= 70 AND marks < 80;

UPDATE studentinfo SET Grade = "B" WHERE marks >= 60 AND marks < 70;

SELECT * FROM studentinfo;

ALTER TABLE studentinfo 
DROP COLUMN GRADE;