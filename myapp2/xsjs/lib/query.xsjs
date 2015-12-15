var conn = $.db.getConnection();

var sql = 'SELECT * FROM "myapp2::MyContext.MyTable"';
var stmt = conn.prepareStatement(sql);

var rs = stmt.executeQuery();

var data = [];

while (rs.next()) {
	var row = {
	  id: rs.getInt(1),
	  value: rs.getNString(2)
	}
	data.push(row);
}

$.response.contentType = "application/json";
$.response.setBody(JSON.stringify(data));
