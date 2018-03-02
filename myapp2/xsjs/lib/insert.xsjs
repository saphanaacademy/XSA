const idParam = $.request.parameters.get('id');
const id = Number.parseInt(idParam, 10);

if (Number.isNaN(id)) {
    $.response.setBody("id is not a number: " + idParam);
} else {    
    let conn = null;

    try {
        conn = $.hdb.getConnection();

        const rowsCount = conn.executeUpdate('INSERT INTO "myapp2::MyContext.MyTable" VALUES (?, ?)', id, $.request.parameters.get('value'));
        conn.commit();

        $.response.setBody("XSJS Insert. # of rows: " + rowsCount);
    } catch (e) {
        $.response.setBody("Caught an error: " + e.toString());
    } finally {
        if (conn) {
            try {
                conn.close();
            } catch (e) {
                $.response.setBody("Caught an error: " + e.toString());
            }
        }
    }
}