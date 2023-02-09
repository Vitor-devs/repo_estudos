# group by
# Serve para agrupar colunas e checar quantidade de determinados elementos

select gender, count(gender)
from employees
group by gender