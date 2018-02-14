var conn = $.hdb.getConnection();
var ts = new Date().toISOString();
conn.executeUpdate('INSERT INTO "myxsaapp2::MyContext.MyTable" ("created") VALUES(?)', ts);
conn.commit();
conn.close();	
$.response.setBody("XSJS Insert");