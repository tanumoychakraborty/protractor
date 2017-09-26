package com.protractor.Runner;

import java.util.List;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;
import org.apache.maven.plugin.logging.Log;

import com.protractor.Util.OSUtil;
import com.protractor.Util.ProtectorServiceUtil;
import com.protractor.Util.ProtractorCommandGenerator;



public class ProtractorRunner extends AbstractMojo {
	private static Configuration CF;
	public static Log log;

	public void execute() throws MojoExecutionException, MojoFailureException {
		getConfig();
		getLogger();
		if(OSUtil.isWindowsPlatform()){
			log.info("Running Protractor in Windows Environment ");
			ProtractorCommandGenerator.setConfiguration(CF);
			log.info("ProtractorCommandGenerator.setConfiguration(CF)");
			List<String> commands = ProtractorCommandGenerator.getCommands();
			log.info("ProtractorCommandGenerator.getCommands()");
			ProtectorServiceUtil psu = new ProtectorServiceUtil(CF.isIgnoreFailes(),log, commands);
			log.info("ProtectorServiceUtil psu = new ProtectorServiceUtil(false, log, commands);");
			psu.exec();
			log.info("psu.exec()");
		}
		else
			log.info("Running Protractor in Unix Environment ");
	}

	
	public void getConfig(){
		CF = ConfigurationParser.parse();
	}
	
	public void getLogger(){
		log = getLog();
	}
}
