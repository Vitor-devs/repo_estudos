select a.first_name, b.title, c.salary

from employees as a  
inner join
titles as b
on a.emp_no = b.emp_no

inner join
salaries as c
on a.emp_no = c.emp_no

order by title