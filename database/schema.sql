CREATE DATABASE college_db;

USE college_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    course VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO students (name, course, email) VALUES
('Rahul Sharma', 'Btech', 'rahul@gmail.com'),
('Anjali Verma', 'Mtech', 'anjali@gmail.com');
('Akhil Mehta', 'Mtech', 'akhil@gmail.com');

