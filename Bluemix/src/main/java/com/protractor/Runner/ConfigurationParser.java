package com.protractor.Runner;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class ConfigurationParser {

	@SuppressWarnings("unchecked")
	public static Configuration parse(){
		JSONParser parser = new JSONParser();
		JSONArray a;
		Configuration dto = new Configuration();
		try {
			a = (JSONArray) parser.parse(new FileReader("Config\\protractor-run-config.json"));
			if (a.size() > 1) {
				System.out.println("Multiple configurations found in protractor-run-config.json. Only one is allowed");
				return null;
			}
			for (Object o : a) {
				JSONObject conf = (JSONObject) o;

				dto.setProtractor((String) conf.get("protractor"));
				dto.setConfigFiles((List<String>) conf.get("configFiles"));
				dto.setDebug(new Boolean(conf.get("debug").toString()));
				dto.setArguments((String) conf.get("arguments"));
				dto.setBeforeRunning((String) conf.get("beforeRunning"));
				dto.setIgnoreFailes(new Boolean(conf.get("ignoreFailes").toString()));
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}

		return dto;
	}
}
