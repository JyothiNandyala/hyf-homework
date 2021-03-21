--meal table:
CREATE TABLE `week3`.`meal`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` varchar(255) NOT NULL,
 `description` text NOT NULL,
 `location` varchar(255) NOT NULL,
 `when` DATETIME NOT NULL,
 `max_reservations` int(11) NOT NULL,
 `price` decimal NOT NULL,
 `created_date` date NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Get all meals
SELECT * FROM `week3`.`meal`;

--Add a new meal

INSERT INTO `week3`.`meal` (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Biriyani", "Chicken Biriyani with spicy", "Glostrup", "2021-01-30 19:00:00", 7, 150, "2021-01-20");

INSERT INTO `week3`.`meal` (title, description, location, `when` , max_reservations, price, created_date) VALUES
("Fish", "Fish curry with spicy", "Nellore","2021-01-26 06:54:16",3,150,"2021-01-23");

insert into `week3`.`meal`(title, description, location,`when`,max_reservations,price,created_date) values
('Mutton', 'Mutton fry with spicy', 'Chennai','2021-01-27 06:54:16','4','200','2021-01-24');


--Get a meal with any id, fx 1
SELECT * FROM `week3`.`meal`
WHERE id=1;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `week3`.`meal` SET title="Veg Fried Rice" WHERE id=2;

SELECT * FROM `week3`.`meal`;

--Delete a meal with any id, fx 1
DELETE FROM `week3`.`meal` WHERE id=3;
SELECT * FROM `week3`.`meal`;

--Reservation Table:
CREATE TABLE `week3`. `reservation`(
 id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 number_of_guests int(10) unsigned NOT NULL ,
 meal_id int(10) unsigned NOT NULL ,
 created_date date NOT NULL,
 contact_phonenumber varchar(25) NOT NULL,
 contact_name varchar(30) NOT NULL,
 contact_email varchar(50) NOT NULL,
 CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `week3`.`reservation` (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES ("3", "2", "2021-01-20", "3456789124", "jyothi", "jyothi@email.com");

INSERT INTO `week3`.`reservation` (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES ("1", "1", "2021-01-25", "2345645365", "sandhana", "sandhana@email.com");
--Get all reservations
SELECT * FROM `week3`.`reservation`;
--Get a reservation with any id, fx 1
SELECT * FROM `week3`.`reservation`
WHERE id=1;
--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `week3`.`reservation` SET number_of_guests="5" WHERE id=1;
--Delete a reservation with any id, fx 1
DELETE FROM `week3`.`reservation` WHERE id=6;

--Review table:
CREATE TABLE `week3`.`review`(
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(200),
description TEXT,
meal_id int(10) unsigned NOT NULL ,
stars INT,
created_date DATE,
CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `week3`.`review` (id,title, description, meal_id, stars, created_date)
VALUES (1,"Delightful", "We had a great dinner", 2, 4, "2021-02-02");

INSERT INTO `week3`.`review` (id,title, description, meal_id, stars, created_date)
VALUES (2,"Delicious", "Its an amazing food its is super", 1, 5, "2021-01-02");
--Get all reviews
SELECT * FROM `week3`.`review`;
--Get a review with any id, fx 1
SELECT * FROM `week3`.`review`
WHERE id=1;
--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `week3`.`review` SET stars="3" WHERE id=1;
Delete a review with any id, fx 1
DELETE FROM `week3`.`review`  WHERE id=2;

--Additional queries :

INSERT INTO `week3`.`meal` (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("chicken65", "Chicken 65 with more spicies", "Glostrup", "2021-01-30 19:00:00", 4, 80, "2021-01-30");
INSERT INTO `week3`.`meal` (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("grill chicken", "Chicken Biriyani with spicy", "chennai", "2021-01-30 19:00:00", 1, 70, "2021-01-28");
INSERT INTO `week3`.`meal` (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("pizza", "Chicken pizza with extra spicy", "hyderabad", "2021-01-30 19:00:00", 9, 140, "2021-01-23");
INSERT INTO `week3`.`meal` (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Burger", "Chicken burger with extra sauce", "banblore", "2021-01-30 19:00:00", 8, 120, "2021-01-26");

INSERT INTO `week3`.`reservation` (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES ("5", "2", "2021-02-20", "3456589124", "rajani", "rajani@email.com");
INSERT INTO `week3`.`reservation` (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES ("6", "1", "2021-03-20", "3456789654", "soujanya", "soujanya@email.com");
INSERT INTO `week3`.`reservation` (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES ("8", "2", "2021-01-29", "3456723424", "charmi", "charmi@email.com");

INSERT INTO `week3`.`review` (id,title, description, meal_id, stars, created_date)
VALUES (2,"Sleepy", "After had my delicious dinner feeling sleepy", 2, 6, "2021-01-20");

INSERT INTO `week3`.`review` (id,title, description, meal_id, stars, created_date)
VALUES (3,"Feeling great", "I was feeling very great when i was eating with my own money", 1, 4, "2021-02-12");

INSERT INTO `week3`.`review` (id,title, description, meal_id, stars, created_date)
VALUES (4,"Relaxing", "Finally relaxed after came from the restaurent", 2, 7, "2021-01-26");

--Get meals that has a price smaller than a specific price fx 90

select * from `week3`.`meal`
where price<90;

--Get meals that still has available reservations
SELECT * FROM `week3`.`meal`
WHERE `week3`.`meal`.max_reservations >(
SELECT SUM(`week3`.`reservation`.number_of_guests)
FROM `week3`.`reservation`
WHERE `week3`.`reservation`.meal_id=meal.id);

--Get meals that partially match a title.

select * from `week3`.`meal`
where title LIKE '%chicken';

--Get meals that has been created between two dates
select * from `week3`.`meal`
where created_date  BETWEEN '2021-01-23' AND '2021-01-30';

--Get only specific number of meals fx return only 5 meals

select * from `week3`.`meal`
LIMIT 5;

--Get the meals that have good reviews

SELECT * FROM `week3`.`review`
INNER JOIN `week3`.`meal` ON meal_id=meal.id
WHERE stars =7;

--Get reservations for a specific meal sorted by created_date

select * from `week3`.`reservation`
where  meal_id=2
ORDER BY created_date;

--Sort all meals by average number of stars in the reviews

select * from `week3`.`meal`
INNER JOIN `week3`.`review` ON meal.id=meal_id
ORDER BY (
  SELECT AVG(`week3`.`review`.stars) AS avg
  FROM `week3`.`review`
  );

