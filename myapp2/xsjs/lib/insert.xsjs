var conn = $.db.getConnection();

var sql = 'INSERT INTO "myapp2::MyContext.MyTable" VALUES (?, ?)';
var stmt = conn.prepareStatement(sql);
stmt.setInt(1, $.request.parameters.get('id'));
stmt.setNString(2, $.request.parameters.get('value'));
stmt.execute();

conn.commit();

$.response.setBody("XSJS Insert");
