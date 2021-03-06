/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the GPL v3 License:
 * http://www.goorm.io/intro/License
 * project_name : goormIDE
 * version: 1.0.0
 **/

org.goorm.plugin.nodejs_examples = function () {
	this.name = "nodejs_examples";
	this.mainmenu = null;
	this.debug_con = null;
	this.current_debug_project = null;
	this.terminal = null;
	this.breakpoints = null;
};

org.goorm.plugin.nodejs_examples.prototype = {
	init: function () {
		
		this.add_project_item();
		
		this.mainmenu = core.module.layout.mainmenu;
		
		this.cErrorFilter = /[A-Za-z]* error: [A-Za-z0-9 '",:_\\\/\.\+\-\*\#\@]*/;
		this.cWarningFilter = /[A-Za-z]* warning: [A-Za-z0-9 '",:_\\\/\.\+\-\*\#\@]*/;
		this.lineFilter = /:[0-9]*:/;
		
		this.add_mainmenu();
		
		this.add_menu_action();
	},
	
	add_project_item: function () {
		$("div[id='project_new']").find(".project_types").append("<div class='project_wizard_first_button' project_type='nodejsexamp'><div class='project_type_icon'><img src='/org.goorm.plugin.nodejs_examples/images/nodejs.png' class='project_icon' /></div><div class='project_type_title'>node.js Examples</div><div class='project_type_description'>node.js examples</div></div>");
		
		$("div[id='project_new']").find(".project_items").append("<div class='project_wizard_second_button all nodejsexamp' description='Bingo game example' project_type='nodejs_examples'  plugin_name='org.goorm.plugin.nodejs_examples'><img src='/org.goorm.plugin.nodejs_examples/images/nodejs_console.png' class='project_item_icon' /><br /><a>Bingo</a></div>");
		
		$("div[id='project_new']").find(".project_items").append("<div class='project_wizard_second_button all nodejsexamp' description='Chat example' project_type='nodejs_examples'  plugin_name='org.goorm.plugin.nodejs_examples'><img src='/org.goorm.plugin.nodejs_examples/images/nodejs_console.png' class='project_item_icon' /><br /><a>Chat</a></div>");
		
		$("div[id='project_new']").find(".project_items").append("<div class='project_wizard_second_button all nodejsexamp' description='Cluster module example' project_type='nodejs_examples'  plugin_name='org.goorm.plugin.nodejs_examples'><img src='/org.goorm.plugin.nodejs_examples/images/nodejs_console.png' class='project_item_icon' /><br /><a>Cluster</a></div>");
		
		$("div[id='project_new']").find(".project_items").append("<div class='project_wizard_second_button all nodejsexamp' description='Realtime collaborative editor' project_type='nodejs_examples'  plugin_name='org.goorm.plugin.nodejs_examples'><img src='/org.goorm.plugin.nodejs_examples/images/nodejs_console.png' class='project_item_icon' /><br /><a>Realtime Collaborative Editor</a></div>");
		
		$("div[id='project_new']").find(".project_items").append("<div class='project_wizard_second_button all nodejsexamp' description='mongoDB map-reduce example' project_type='nodejs_examples'  plugin_name='org.goorm.plugin.nodejs_examples'><img src='/org.goorm.plugin.nodejs_examples/images/nodejs_console.png' class='project_item_icon' /><br /><a>mongoDB MapReduce</a></div>");
		
		$("div[id='project_new']").find(".project_items").append("<div class='project_wizard_second_button all nodejsexamp' description='Memo example using mongoose' project_type='nodejs_examples'  plugin_name='org.goorm.plugin.nodejs_examples'><img src='/org.goorm.plugin.nodejs_examples/images/nodejs_console.png' class='project_item_icon' /><br /><a>Memo (mongoose)</a></div>");
		
		$("div[id='project_new']").find(".project_items").append("<div class='project_wizard_second_button all nodejsexamp' description='Memo example using mongolian' project_type='nodejs_examples'  plugin_name='org.goorm.plugin.nodejs_examples'><img src='/org.goorm.plugin.nodejs_examples/images/nodejs_console.png' class='project_item_icon' /><br /><a>Memo (mongolian)</a></div>");
		
		$("div[id='project_new']").find(".project_items").append("<div class='project_wizard_second_button all nodejsexamp' description='Memo example using mysql' project_type='nodejs_examples'  plugin_name='org.goorm.plugin.nodejs_examples'><img src='/org.goorm.plugin.nodejs_examples/images/nodejs_console.png' class='project_item_icon' /><br /><a>Memo (mysql)</a></div>");
		
		$("div[id='project_new']").find(".project_items").append("<div class='project_wizard_second_button all nodejsexamp' description='Simple SNS example' project_type='nodejs_examples'  plugin_name='org.goorm.plugin.nodejs_examples'><img src='/org.goorm.plugin.nodejs_examples/images/nodejs_console.png' class='project_item_icon' /><br /><a>Simple SNS</a></div>");
		
		$(".project_dialog_type").append("<option value='c'>node.js examples</option>").attr("selected", "");
		
	},
	
	add_mainmenu: function () {
		var self = this;
		
		$("ul[id='plugin_new_project']").append("<li class=\"yuimenuitem\"><a class=\"yuimenuitemlabel\" href=\"#\" action=\"new_file_nodejsexamp\" localizationKey='file_new_nodejs_project'>node.js examples</a></li>");
		//this.mainmenu.render();
	},
	
	add_menu_action: function () {
		$("a[action=new_file_nodejsexamp]").unbind("click");
		$("a[action=new_file_nodejsexamp]").click(function () {
			core.dialog.new_project.show();
			$(".project_wizard_first_button[project_type=nodejsexamp]").trigger("click");
			$("#project_new").find(".project_types").scrollTop($(".project_wizard_first_button[project_type=nodejsexamp]").position().top - 100);
		});
	},
	
	new_project: function(data) {
		/* data = 
		   { 
			project_type,
			project_detailed_type,
			project_author,
			project_name,
			project_desc,
			use_collaboration
		   }
		*/
		
		console.log(data.project_detailed_type);
		
		switch(data.project_detailed_type) {
			case "Bingo":
				data.project_detailed_type="bingo";
				data.plugins["org.goorm.plugin.nodejs_examples"]["plugin.nodejs_examples.main"] = "app";
				break;
			case "Chat":
				data.project_detailed_type="chat";
				data.plugins["org.goorm.plugin.nodejs_examples"]["plugin.nodejs_examples.main"] = "app";
				break;
			case "Cluster":
				data.project_detailed_type="cluster";
				data.plugins["org.goorm.plugin.nodejs_examples"]["plugin.nodejs_examples.main"] = "app";
				break;
			case "Realtime Collaborative Editor":
				data.project_detailed_type="editor";
				data.plugins["org.goorm.plugin.nodejs_examples"]["plugin.nodejs_examples.main"] = "app";
				break;
			case "mongoDB MapReduce":
				data.project_detailed_type="mapreduce";
				data.plugins["org.goorm.plugin.nodejs_examples"]["plugin.nodejs_examples.main"] = "score_ranking";
				break;
			case "Memo (mongoose)":
				data.project_detailed_type="memo";
				data.plugins["org.goorm.plugin.nodejs_examples"]["plugin.nodejs_examples.main"] = "app";
				break;
			case "Memo (mongolian)":
				data.project_detailed_type="memo_mongolian";
				data.plugins["org.goorm.plugin.nodejs_examples"]["plugin.nodejs_examples.main"] = "app";
				break;
			case "Memo (mysql)":
				data.project_detailed_type="memo_mysql";
				data.plugins["org.goorm.plugin.nodejs_examples"]["plugin.nodejs_examples.main"] = "app";
				break;
			case "Simple SNS":
				data.project_detailed_type="sns";
				data.plugins["org.goorm.plugin.nodejs_examples"]["plugin.nodejs_examples.main"] = "app";
				break;
			default:
				data.project_detailed_type="default";
				data.plugins["org.goorm.plugin.nodejs_examples"]["plugin.nodejs_examples.main"] = "main";
		}
		
		var send_data = {
				"plugin" : "org.goorm.plugin.nodejs_examples",
				"data" : data
		};
		
		$.get('/plugin/new', send_data, function(result){
			$(core).trigger("on_project_open");
			core.module.layout.project_explorer.refresh();
		});
	},
	
	run: function(path) {
		var self=this;
		var property = core.property.plugins['org.goorm.plugin.nodejs_examples'];
		
		var source_path = property['plugin.nodejs_examples.source_path'];
		var main = property['plugin.nodejs_examples.main'];

		var cmd1 = "node " + source_path + main;
		core.module.layout.terminal.send_command(cmd1+'\r');

	},
	
	debug: function (path) {
		var self = this;
		var property = core.property.plugins['org.goorm.plugin.nodejs_examples'];
		var table_variable = core.module.debug.table_variable;
		var debug_module = core.module.debug;
		this.terminal = core.module.layout.workspace.window_manager.open("/", "debug", "terminal", "Terminal").terminal;
		this.current_debug_project = path;
		this.prompt = /debug>/;
		this.terminal.debug_endstr = /program terminated/;
		
		// debug탭 초기화
		table_variable.initializeTable();
		table_variable.refreshView();
		
		this.breakpoints = [];
		
//		// debug start!
		var send_data = {
				"plugin" : "org.goorm.plugin.nodejs_examples",
				"path" : path,
				"mode" : "init"
		};
		
		if(this.terminal.index != -1) {
			self.debug_cmd(send_data);
		}
		else {
			$(this.terminal).one("terminal_ready", function(){
				self.debug_cmd(send_data);
			});
		}
		
//		$(debug_module).off("value_changed");
//		$(debug_module).on("value_changed",function(e, data){
//			self.terminal.send_command("set "+data.variable+"="+data.value+"\r", self.prompt);
//		});
		
		$(debug_module).off("debug_end");
		$(debug_module).on("debug_end",function(){
			table_variable.initializeTable();
			table_variable.refreshView();
			
			$.get("/remove_port", {
				"port": self.debug_port
			});
			
			// clear highlight lines
			var windows = core.module.layout.workspace.window_manager.window;
			for (var i in windows) {
				var window = windows[i];
				if (window.project == self.current_debug_project) {
					window.editor && window.editor.clear_highlight();
				}
			}
			
			setTimeout(function(){
				self.debug_cmd({mode:'terminate'});
			}, 500);
		});
	},
	
	/*
	 * 디버깅 명령어 전송
	 */
	debug_cmd: function (cmd) {
		/*
		 * cmd = { mode, project_path }
		 */
		var self=this;
		var property = core.property.plugins['org.goorm.plugin.nodejs_examples'];
		var table_variable = core.module.debug.table_variable;
		
		var main = property['plugin.nodejs_examples.main'];
		var buildPath = " "+property['plugin.nodejs_examples.source_path'];
		
		if(this.terminal === null) {
			console.log("no connection!");
			return ;
		}
				
		switch (cmd.mode) {
			case 'init':
				$.getJSON("/alloc_port", {
					"process_name": "node debug"
				}, function(result){
					self.debug_port = result.port;
					self.terminal.flush_command_queue();
					self.terminal.send_command("node debug --port=" + result.port+buildPath+main+"\r", null);
					setTimeout(function(){
						self.terminal.send_command("\r", /connecting.*ok/);
						self.set_breakpoints();
						self.debug_get_status();
					}, 1000);
					
				})
				break;
			case 'continue':
				self.set_breakpoints();
				self.terminal.send_command("cont\r", self.prompt, function(){
					setTimeout(function(){
						self.debug_get_status();
					}, 500);
				}); break;
				break;
			case 'terminate':
				self.terminal.flush_command_queue();
				self.terminal.send_command("quit\r", self.prompt);
				
				table_variable.initializeTable();
				table_variable.refreshView();
				
				$.get("/remove_port", {
					"port": self.debug_port
				});
				
				// clear highlight lines
				var windows = core.module.layout.workspace.window_manager.window;
				for (var i in windows) {
					var window = windows[i];
					if (window.project == self.current_debug_project) {
						window.editor && window.editor.clear_highlight();
					}
				}
				break;
			case 'step_over':
				self.set_breakpoints();
				self.terminal.send_command("next\r", self.prompt, function(){
					setTimeout(function(){
						self.debug_get_status();
					}, 500);
				}); break;
			case 'step_in':
				self.set_breakpoints();
				self.terminal.send_command("step\r", self.prompt, function(){
					setTimeout(function(){
						self.debug_get_status();
					}, 500);
				}); break;
			case 'step_out':
				self.set_breakpoints();
				self.terminal.send_command("out\r", self.prompt, function(){
					setTimeout(function(){
						self.debug_get_status();
					}, 500);
				}); break;
			default:
				break;
		}		
	},
	
	debug_get_status: function(){
		var self = this;
		this.terminal.send_command("backtrace\r", this.prompt, function(terminal_data){
			self.set_currentline(terminal_data);
		});
		
		// nodejs에서 전체 variable을 볼수있는 명령어가 없음.
//		this.terminal.send_command("locals\r", this.prompt, function(terminal_data){
//			self.set_debug_variable(terminal_data);
//		});
	},
	
	set_currentline: function(terminal_data){
		var self = this;
		var lines = terminal_data.split('\n');
		
		// clear highlight lines
		var windows = core.module.layout.workspace.window_manager.window;
		for (var i in windows) {
			var window = windows[i];
			if (window.project == self.current_debug_project) {
				window.editor && window.editor.clear_highlight();
			}
		}
		
		$.each(lines, function(i, line){
			if(line == '') return;
			
			// 현재 라인 처리
			var regex = /#0 (.*):([\d]+):([\d]+)/;
			if(regex.test(line)) {
				var match = line.match(regex);
				var filename = match[1];
				var line_number = match[2];
				
				var windows = core.module.layout.workspace.window_manager.window;
				for (var j=0; j<windows.length; j++) {
					var window = windows[j];
					if (window.project == self.current_debug_project 
							&& window.filename == filename) {
						window.editor.highlight_line(line_number);
					}
				}
			}
		});
	},
	
	set_debug_variable: function(terminal_data){
		var lines = terminal_data.split('\n');
		var table_variable = core.module.debug.table_variable;
		
		table_variable.initializeTable();
		
		$.each(lines, function(i, line){
			if(line == '') return;
			
			// local variable 추가
			var variable = line.split(' = ');
			if (variable.length == 2) {
				table_variable.addRow({
					"variable": variable[0].trim(),
					"value": variable[1].trim()
				});
			}
		});
		table_variable.refreshView();
	},
	
	set_breakpoints: function(){
		var self = this;
		var property = core.property.plugins['org.goorm.plugin.nodejs_examples'];
		var windows = core.module.layout.workspace.window_manager.window;
		var remains = [];
		var breakpoints = [];
		for (var i=0; i < windows.length; i++) {
			var window = windows[i];

			if (window.project == this.current_debug_project) {
				var filename = window.filename;
				var filepath = window.filepath;
				if(window.editor === null) continue;				
				
				for (var j = 0; j < window.editor.breakpoints.length; j++) {
					var breakpoint = window.editor.breakpoints[j];
					breakpoint += 1;
					filename = filename.split('.js')[0];
					breakpoint = "'" + filename + "', " + breakpoint;
					
					breakpoints.push(breakpoint);
				}
			}
		}
		
		for(var j=0; j < self.breakpoints.length; j++) {
			remains.push(self.breakpoints[j]);
		}
		
		if(breakpoints.length > 0){
			for(var j=0; j < breakpoints.length; j++) {
				var breakpoint = breakpoints[j];
				var result = remains.inArray(breakpoint);
				if(result == -1) {
					self.terminal.send_command("setBreakpoint(" + breakpoint + ")\r", />|(main\[[\d]\][\s\n]*)$/);
					self.breakpoints.push(breakpoint);
				}
				else {
					remains.remove(result);
				}
			}
		}
		else {
			// no breakpoints
		}
				
		for(var j=0; j < remains.length; j++) {
			var result = self.breakpoints.inArray(remains[j]);
			if(result != -1) {
				self.breakpoints.remove(result);
				self.terminal.send_command("clearBreakpoint(" + remains[j] + ")\r", />|(main\[[\d]\][\s\n]*)$/);
			}
		}

	},
	
	build: function (projectName, callback) {
		var self=this;
		
		console.log("build not needed for nodejs.");
		
		if(callback) callback();
	},
	
	clean: function(){
		console.log("nodejs clean");
	}
};