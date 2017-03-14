function train() {
	var searchStrategy = parseInt($.request.parameters.get("searchStrategy"));
	if (searchStrategy >= 0 && searchStrategy <= 1) {
		var conn;
		conn = $.hdb.getConnection();
		var fn = conn.loadProcedure("myapp.db::train");
		var fnResult = fn(searchStrategy);
		conn.commit();
		conn.close();
		$.response.setBody("Training finished.");
		$.response.status = $.net.http.OK;
	} else {
		$.response.setBody("ERROR: train searchStrategy must be 0 or 1.");
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	}
}

function predict() {
	var forecastLength = parseInt($.request.parameters.get("forecastLength"));
	if (forecastLength > 0) {
		var conn;
		conn = $.hdb.getConnection();
		var fn = conn.loadProcedure("myapp.db::predict");
		var fnResult = fn(forecastLength);
		conn.commit();
		conn.close();
		$.response.setBody("Prediction finished.");
		$.response.status = $.net.http.OK;
	} else {
		$.response.setBody("ERROR: predict forecastLength must be > 0.");
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	}
}

var cmd = $.request.parameters.get("cmd");
switch (cmd) {
	case "train":
		train();
		break;
	case "predict":
		predict();
		break;
	default:
		$.response.setBody("Invalid Command: " + cmd);
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}