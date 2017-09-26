package com.protractor.Util;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.protractor.Runner.Configuration;

public class ProtractorCommandGenerator {
	
	private static Configuration CF;
	private static String relativePath = "src\\main\\java\\com\\protractor\\testscripts\\";

	public static void setConfiguration(Configuration cf){
		CF = cf;
	}
	
	public static List<String> getCommands(){
		List<String> commands = new ArrayList<String>();
		for(String configFilePath : CF.getConfigFiles()){
			File configFile = new File(relativePath+configFilePath);
			commands.add(getCommand(configFile));
		}
		return commands;
	}
	
	private static String getCommand(File configFile){
		return String.format("%s %s %s %s",CF.getProtractor(),
                CF.isDebug() ? (CF.isDebugBrk() ? "--debug-brk" : "debug") : "",
                configFile.getAbsolutePath(),
                StringUtils.isBlank(CF.getArguments()) ? "" : CF.getArguments()).trim();
		//return "protractor "+configFile.getAbsolutePath();
	}
	
	
}
