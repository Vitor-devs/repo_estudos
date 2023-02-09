# any : retorna os resultados que recebem true da subquery 
# por meio de uma subquery receberemos apenas os resultados que condizem
# a uma condição ; Ex: Se queremos os nomes de quem ganha mais de 150000
# Só vamos receber nomes se o cara ganhar mais de 150000

select first_name
from employees
where emp_no = any (
	select emp_no
    from salaries
    where salary > 150000
)
/* Comentario de multiplas linhas*/