hdbsql -n localhost -d SYSTEMDB -i 90 -u system
create database SHA system user password Password1;
alter database SHA add 'diserver';
alter database SHA add 'scriptserver';
q 
