/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zteam1website/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
