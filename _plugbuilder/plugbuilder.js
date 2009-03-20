// Tool for building plug-ins
// code by andrew pask and tim place


var toolfolder = "";
var pluginsfolder = "";
var vstfolder = "";
var plugref = "foo";
var maxb = "maxb";
var text = "TEXT";



function loadbang()
{
	toolfolder = this.patcher.filepath;

	toolfolder.match(/(.*\/)_plugbuilder.*/).$1;
	pluginsfolder = RegExp.$1;
	post("PLUG-IN SOURCES: " + pluginsfolder);post();

	if(max.os == "macintosh")
		toolfolder.match(/(.*\/)_plugbuilder.*/).$1;
	else // "windows"
		toolfolder.match(/(.*\/)_plugbuilder.*/).$1;
	vstfolder = RegExp.$1 + "_build_folder/";//change this to suit your own custom VST folder
	post("PLUG-IN BUILDS: "+vstfolder);post();
}




// BUILD ONE NAMED PLUGIN
function build(plugin_name)
{
	var f;
	var p;
	var plugfolder;
	var plugname;
	var plugpath;
	var plugbuildpath;
	f = new Folder(pluginsfolder);
	
	plugname = plugin_name;
	plugfolder = plugname + "-source";

	if(max.os == "macintosh"){
		plugpath = pluginsfolder + plugfolder + "/" + plugname + ".mxt";
	}
	else if(max.os == "windows"){
		plugpath = pluginsfolder + plugfolder + "\\" + plugname + ".mxt";
	}
						
	post(plugpath);
	post();
			
	if(max.os == "macintosh"){
		plugbuildpath = vstfolder + plugname;
	}
	else if(max.os == "windows"){
		plugbuildpath = vstfolder + plugname + ".dll";
	}
			
	post("JS IS BUILDING: " + plugbuildpath);
	post();

	

	max.openfile(plugref, plugpath);   // open the patch at plugpath and name it plugref
	max.buildplugin(plugref,plugbuildpath);  // build plugref as a plugin at plugbuildpath
	max.closefile(plugref);  // close out the patch named plugref
	
}


