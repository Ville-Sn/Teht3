-- creates user and sampleuser with right privileges that is used in backend
-- or use whatever and change db.config.js accordingly
CREATE DATABASE IF NOT EXISTS athletes;
CREATE OR REPLACE USER 'Sampleuser1'@'localhost' IDENTIFIED BY 'sampleuser';
GRANT INSERT,UPDATE,DELETE,SELECT,CREATE,DROP ON athletes.* TO 'Sampleuser1'@'localhost' IDENTIFIED BY 'sampleuser';

--populate the database, not all images work, but you can replace them with your own if you want to.
INSERT INTO athletes (firstname, lastname, nickname, dateOfBirth, weight, pictureURL, sport, achievements) 
VALUES 
('John', 'Doe', 'Johnny', '1990-01-01', 75, 'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/07/08/USAT/74333641007-flagg.jpg?crop=2163,1215,x0,y124&width=2163&height=1215&format=pjpg&auto=webp', 'Basketball', 'MVP 2020'),
('Jane', 'Smith', 'Janie', '1992-02-02', 65, 'https://cdn.sanity.io/images/vxy259ii/production/d953da200cae46e3b7a082ea17868cb834e14405-660x420.jpg', 'Tennis', 'Grand Slam Winner'),
('Mike', 'Johnson', 'MJ', '1988-03-03', 80, 'https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/zpuasf0so48aqijzrnkt', 'Football', 'Super Bowl Champion'),
('Emily', 'Davis', 'Em', '1995-04-04', 55, 'http://example.com/emily.jpg', 'Swimming', 'Olympic Gold Medalist'),
('Chris', 'Brown', 'CB', '1991-05-05', 70, 'http://example.com/chris.jpg', 'Soccer', 'World Cup Winner'),
('Sarah', 'Wilson', 'Sally', '1993-06-06', 60, 'http://example.com/sarah.jpg', 'Gymnastics', 'World Champion'),
('David', 'Martinez', 'Dave', '1989-07-07', 85, 'http://example.com/david.jpg', 'Boxing', 'World Heavyweight Champion'),
('Laura', 'Garcia', 'Lau', '1994-08-08', 58, 'http://example.com/laura.jpg', 'Volleyball', 'Olympic Silver Medalist'),
('James', 'Anderson', 'Jimmy', '1996-09-09', 78, 'http://example.com/james.jpg', 'Cricket', 'World Cup Winner'),
('Olivia', 'Taylor', 'Liv', '1997-10-10', 62, 'http://example.com/olivia.jpg', 'Track and Field', 'Olympic Bronze Medalist');