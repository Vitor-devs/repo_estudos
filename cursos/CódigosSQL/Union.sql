# Union all ele une as duas colunas em um coluna e pode conter duplicatas
# As colunas precisam ter o mesmo nome
select dept_no
from departments 
union all 
select dept_no 
from dept_emp

# Union ele une duas colunas em uma só sem duplicatas
# com as colunas com o mesmo nome

select dept_no
from departments 
union  
select dept_no 
from dept_emp