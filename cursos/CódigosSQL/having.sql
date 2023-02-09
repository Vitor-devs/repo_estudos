#semelhante ao where porém usado para aggregate functions (avg, sum, group by)
#cria uma "condição" igual ao where porém em aggregate functions

select hire_date, count(hire_date)
from employees
group by hire_date
having count(hire_date) > 30 
order by count(hire_date) desc