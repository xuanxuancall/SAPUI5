sap.ui.controller("suppliers.suppliers", {
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ysapui5_10437_table_view.suppliers
*/
	onInit: function() {
		var oModel = sap.ui.model.json.JSONModel('models/liers.json');			
		this.getView().setModel(oModel);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ysapui5_10437_table_view.suppliers
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ysapui5_10437_table_view.suppliers
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ysapui5_10437_table_view.suppliers
*/
//	onExit: function() {
//
//	}

});