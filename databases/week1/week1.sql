--1.Find out how many tasks are in the task table

SELECT * FROM `class16`.task

--2.Find out how many tasks in the task table do not have a valid due date

SELECT * FROM `class16`.task WHERE due_date IS null;

--3.Find all the tasks that are marked as done

SELECT * FROM `class16`.task
INNER JOIN `class16`.status ON status_id=status.id
WHERE name ='Done';

--4.Find all the tasks that are not marked as done

SELECT * FROM `class16`.task
INNER JOIN `class16`.status ON status_id=status.id
WHERE name !='Done';

--5.Get all the tasks, sorted with the most recently created first

select * from `class16`.task ORDER BY created DESC;

--6.Get the single most recently created task

select * from `class16`.task ORDER BY created DESC LIMIT 1; 


--7.Get the title and due date of all tasks where the title or description contains database

SELECT title,due_date FROM `class16`.task 
WHERE title LIKE '%da%se%' OR description like '%da%se' ;

--8.Get the title and status (as text) of all tasks

SELECT task.title,status.name AS TEXT FROM `class16`.task
INNER JOIN `class16`.status ON status.id=status_id;

--9.Get the name of each status, along with a count of how many tasks have that status

SELECT status.name from `class16`.task 
INNER JOIN `class16`.status ON status_id=status.id
GROUP BY status.name;

--10.Get the names of all statuses, sorted by the status with most tasks first

SELECT status.name from `class16`.task 
INNER JOIN `class16`.status ON status_id=status.id
GROUP BY status.name
ORDER BY COUNT(*) DESC;
 









