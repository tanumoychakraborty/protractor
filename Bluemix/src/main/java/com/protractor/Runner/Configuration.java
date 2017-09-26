package com.protractor.Runner;

import java.util.List;

public class Configuration {

	
	private String protractor;
	
	private List<String> configFiles;
	
	private boolean debug;
	
	private String arguments;
	
	private String beforeRunning;
	
	private boolean debugBrk;
	
	private boolean ignoreFailes;

	
	public boolean isIgnoreFailes() {
		return ignoreFailes;
	}

	public void setIgnoreFailes(boolean ignoreFailes) {
		this.ignoreFailes = ignoreFailes;
	}

	public String getProtractor() {
		return protractor;
	}

	public void setProtractor(String protractor) {
		this.protractor = protractor;
	}

	public List<String> getConfigFiles() {
		return configFiles;
	}

	public void setConfigFiles(List<String> configFiles) {
		this.configFiles = configFiles;
	}

	public boolean isDebug() {
		return debug;
	}

	public void setDebug(boolean debug) {
		this.debug = debug;
	}

	public String getArguments() {
		return arguments;
	}

	public void setArguments(String arguments) {
		this.arguments = arguments;
	}

	public String getBeforeRunning() {
		return beforeRunning;
	}

	public void setBeforeRunning(String beforeRunning) {
		this.beforeRunning = beforeRunning;
	}
	
    public boolean isDebugBrk() {
		return debugBrk;
	}

	public void setDebugBrk(boolean debugBrk) {
		this.debugBrk = debugBrk;
	}

}
