select emp_no, first_name, (
	select sum(salary)
    from salaries
    where employees.emp_no = salaries.emp_no
) as soma_do_salario
from employees
order by emp_no