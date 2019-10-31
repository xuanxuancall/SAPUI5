sap.ui.jsview("suppliers.suppliers", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ysapui5_10437_table_view.suppliers
	*/ 
	getControllerName : function() {
		return "suppliers.suppliers";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ysapui5_10437_table_view.suppliers
	*/ 
	createContent : function(oController) {		
	
		var oColumns = [
		    new sap.ui.table.Column({
				label: new sap.m.Label({text:"工号"}),
				template: new sap.m.Text().bindProperty("text", "ID"),
				sortProperty: "ID",
				width: "40%"
		    }),
		    new sap.ui.table.Column({
				label: new sap.m.Label({text:"姓名"}),
				template: new sap.m.Text().bindProperty("text", "Name"),
				sortProperty: "Name",
				width: "60%"
		    })
		];	
		
		var oTable = new sap.ui.table.Table({
			width: "100%",
			title: "资源列表",
			visibleRowCount: 2,
			firstVisibleRow: 0,
			editable: false,
			selectionMode: sap.ui.table.SelectionMode.Single,
			columns: oColumns
		});			
		oTable.bindRows("/liers");		
		
 		var oPage = new sap.m.Page({
			title: "资源",
			content: [oTable]
		});
 		
 		return oPage;
 		
	}

});