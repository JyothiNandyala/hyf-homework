--part1:
--Adding a task with these attributes: title, description, created, updated, due_date, status_id, user_id
SELECT * FROM `lesson2`.task;
INSERT INTO `lesson2`.task (title, description, created, updated, due_date, status_id, user_id)
 VALUES('database-MySql', 'Learn how to write the querys', NOW(),NOW(),
 '2021-01-10 12:00:00','1','2');
-- Changing the title of a task
UPDATE `lesson2`.task SET title = 'Wash your teeths' WHERE id = 2;
-- Changing due_date of a task
UPDATE `lesson2`.task SET due_date = '2021-01-18' WHERE id = 3;
--Changing status of a task
UPDATE `lesson2`.task SET status_id = '2' WHERE id = 4;
--UPDATE task
UPDATE `lesson2`.task
SET status_id = '3'
WHERE title = 'picking the vegetables' AND user_id = '2';
--Deleting a task
DELETE FROM `lesson2`.task WHERE id = 6;

SELECT * FROM `lesson2`.task;

--part2:
--creating table ´class´
CREATE TABLE `school`.`class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins_date` text NULL DEFAULT NULL,
  `end_date` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
--creating table ´student´
CREATE TABLE `school`.`student`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
 `class_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
   CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
--inserting values for table class
insert into `school`.class (id, name, begins_date, end_date) values (2, 'class6', '2017-05-25 06:54:16', '2020-10-11 13:05:09');
insert into `school`.class (id, name, begins_date, end_date) values (3, 'class7', '2017-11-25 06:54:16', '2020-10-12 13:05:09');
insert into `school`.class (id, name, begins_date, end_date) values (4, 'class8', '2017-03-25 06:54:16', '2020-10-13 13:05:09');
--inserting values for table student
insert into `school`.student (id, name, email, phone, class_id) values (100, 'jyothi', 'jyothi@email.com', '483-396-8795',1);
insert into `school`.student (id, name, email, phone, class_id) values (101, 'rajani', 'rajani@email.com', '483-300-8795',2);
insert into `school`.student (id, name, email, phone, class_id) values (102, 'sandhana', 'sandhana@email.com', '483-400-8795',2);
insert into `school`.student (id, name, email, phone, class_id) values (103, 'soujanya', 'soujanya@email.com', '483-200-8795',3);
--Creating index on name column in student table 
CREATE INDEX part_of_name ON `school`.student (name);
--Adding a column in class table.
ALTER TABLE `school`.class  ADD status  ENUM('not-started','ongoing','finished');
select * from `school`.class;
select * from `school`.student;

--part3:
--Getting all the tasks assigned to users whose email ends in @spotify.com
SELECT * FROM `hyf_lesson2`.user_task
INNER JOIN `hyf_lesson2`.task ON task_id=task.id
INNER JOIN `hyf_lesson2`.user ON user_id=user.id
WHERE `hyf_lesson2`.user.email LIKE '%@spotify.com';
--Getting all the tasks for 'Donald Duck' with status 'Not started'
SELECT * FROM `hyf_lesson2`.user_task
INNER JOIN `hyf_lesson2`.task ON task_id=task.id
INNER JOIN `hyf_lesson2`.user ON user_id=user.id
INNER JOIN `hyf_lesson2`.status ON status_id=status.id
WHERE `hyf_lesson2`.user.name='Donald Duck' AND status.id=1;
--Getting all the tasks for 'Maryrose Meadows' that were created in september.
SELECT * FROM `hyf_lesson2`.user_task
INNER JOIN `hyf_lesson2`.task ON task_id=task.id
INNER JOIN `hyf_lesson2`.user ON user_id=user.id
WHERE `hyf_lesson2`.user.name='Maryrose Meadows' AND month(task.created)=09;
--Finding how many tasks where created in each month.
SELECT COUNT(*),
 monthname(created)
FROM `hyf_lesson2`.task
GROUP BY monthname(created);

--part4
--create the table for person
CREATE TABLE `relationships`.`person` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
--create the table for products
CREATE TABLE `relationships`.`products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` int(10) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 --create the table for personshopping
  CREATE TABLE `relationships`.`person_shopping` (
  `person_id` int(10) unsigned NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`person_id`, `products_id`),
  CONSTRAINT `fk_person_shopping_person` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_person_shopping_products` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

