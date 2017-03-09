create role "mydata::external_access";
--grant select on schema "MYDATA" to "mydata::external_access";
grant select on "MYDATA"."StockPrices" to "mydata::external_access";

create role "mydata::external_access_g";
--grant select on schema "MYDATA" to "mydata::external_access_g" with grant option;
grant select on "MYDATA"."StockPrices" to "mydata::external_access_g" with grant option;

create user MYDATA_GRANTOR password Password1 no force_first_password_change;
grant "mydata::external_access", "mydata::external_access_g" to MYDATA_GRANTOR with admin option;
