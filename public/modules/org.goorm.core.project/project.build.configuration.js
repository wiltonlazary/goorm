/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the AGPL v3 License:
 * http://www.goorm.io/intro/License
 * project_name : goormIDE
 * version: 1.0.0
 **/

org.goorm.core.project.build.configuration = {
	dialog: null,

	init: function () {
		
		var self = this;
		
//		var handle_open = function() { 
//			if(core.module.plugin_manager.plugins["org.goorm.plugin."+core.status.current_project_type]!=undefined) {
//				core.module.plugin_manager.plugins["org.goorm.plugin."+core.status.current_project_type].build(core.status.current_project_name,core.status.current_project_path);
//			}
//			this.hide(); 
//		};
//
//		var handle_cancel = function() { 	
//			this.hide(); 
//		};
//		
//		this.buttons = [ {text:"Build", handler:handle_open, isDefault:true},
//						 {text:"<span localization_key='button_cancel'>Cancel</span>",  handler:handle_cancel}]; 
//						 
//		this.dialog = new org.goorm.core.project.build.configuration.dialog();
//		var path = "configs/dialogs/org.goorm.core.project/project.build.configuration.html";
//		this.dialog.init({
//			title:"Build Configuration", 
//			path:path,
//			width:600,
//			height:400,
//			modal:true,
//			buttons:this.buttons,
//			success: function () {
//
//			}
//		});
//		this.dialog = this.dialog.dialog;
		$(core).trigger("goorm_loading");
		
		//this.dialog.panel.setBody("AA");
	},
	
	show: function () {
		if(core.status.current_project_path != ""){
			var dialog = core.dialog.project_property.dialog;

			$("#property_tabview > div").each(function(){
				if($(this).attr("plugin") == "org.goorm.plugin."+core.property.type) {
					$("#property_tabview > div").hide();
					$(this).show();
				}
			});
			dialog.panel.show();
		}
		else {
			var result = {result:false, code:5};
			core.module.project.display_error_message(result, 'alert');
		}
	},
	
	init_dialog: function(path,callback){
//		var postdata = {'path':path};
//		$.get("file/get_contents", postdata, function (data) {
//			$("#build_configuration").append(data);
//			callback();
//		});
	},
	
	set_build_config: function(){
//		$("#build_configuration").text('');
//		if(core.module.plugin_manager.plugins['org.goorm.plugin.'+core.status.current_project_type] != undefined) {
//			if(core.module.plugin_manager.plugins['org.goorm.plugin.'+core.status.current_project_type].set_build_config)				
//			core.module.plugin_manager.plugins['org.goorm.plugin.'+core.status.current_project_type].set_build_config(this);
//		}
	}
};