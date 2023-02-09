# exist serve para checar se existe algum registro em uma subquery

select emp_no, first_name, last_name,(
	select sum(salary)
    from salaries
    where employees.emp_no = salaries.emp_no
) as soma_salario
from employees
where exists (
	select salary
    from salaries
    where employees.emp_no = salaries.emp_no
    having sum(salary) > 1000000
)

