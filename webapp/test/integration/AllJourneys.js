jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"stickyheaders/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"stickyheaders/test/integration/pages/Worklist",
		"stickyheaders/test/integration/pages/Object",
		"stickyheaders/test/integration/pages/NotFound",
		"stickyheaders/test/integration/pages/Browser",
		"stickyheaders/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "stickyheaders.view."
	});

	sap.ui.require([
		"stickyheaders/test/integration/WorklistJourney",
		"stickyheaders/test/integration/ObjectJourney",
		"stickyheaders/test/integration/NavigationJourney",
		"stickyheaders/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});