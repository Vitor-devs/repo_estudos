# Uma consulta dentro de outra consulta
select first_name, (
	select sum(salary)
    from salaries as b
    where a.emp_no = b.emp_no
) as soma_salario
from employees as a