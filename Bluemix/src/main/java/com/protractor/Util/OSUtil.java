package com.protractor.Util;

public class OSUtil {

	public static boolean isWindowsPlatform(){
		 return System.getProperty("os.name").toLowerCase().contains("windows");
	}
	
}
