package com.protractor.Util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

import org.apache.maven.plugin.logging.Log;


public class ProtectorServiceUtil {
	private boolean ignoreFailed;
	private final Log log;
	private List<String> commands;

	public ProtectorServiceUtil(boolean ignoreFailed, Log log, List<String> commands) {
		this.ignoreFailed = ignoreFailed;
		this.log = log;
		this.commands = commands;
	}

	public void exec() {
		for (String command : commands) {
			final ProcessBuilder builder;
			builder = createProcessBuilder(command);
			log.info("Executing protractor test Suite ...");
			log.info(String.format("Command:%s", command));

			try {
				final Process process = builder.start();
				if (!executeProtractor(process)) {
					dealFailures();
				}
			} catch (IOException e) {
				log.error("Run protractor test error:", e);
				throw new RuntimeException(e);
			}
		}
	}

	private void dealFailures() {
		if (ignoreFailed) {
			log.warn("There were  protractor test failures. But ignored the build.");
		} else {
			throw new RuntimeException("There were protractor test failures.");
		}
	}

	private boolean executeProtractor(final Process process) {

		BufferedReader protractorOutputReader = null;
		try {
			protractorOutputReader = new BufferedReader(new InputStreamReader(process.getInputStream()));

			for (String line = protractorOutputReader.readLine(); line != null; line = protractorOutputReader
					.readLine()) {
				log.info(line);
			}
			return (process.waitFor() == 0);
		} catch (IOException e) {
			throw new RuntimeException("There was an error reading the output from protractor.", e);
		} catch (InterruptedException e) {
			throw new RuntimeException("The protractor process was interrupted.", e);
		} finally {
			closeQuietly(protractorOutputReader);
		}
	}

	private void closeQuietly(BufferedReader protractorOutputReader) {
		if (protractorOutputReader != null) {
			try {
				protractorOutputReader.close();
			} catch (IOException e) {
				log.error(e);
				throw new RuntimeException(e);
			}
		}
	}

	private ProcessBuilder createProcessBuilder(String command) {
		ProcessBuilder builder;
		if (OSUtil.isWindowsPlatform()) {
			/*int index = command.lastIndexOf("\\")+1;
			String path = command.substring(10, index);
			String fileName = command.substring(index, command.length());
			String cd = "cd "+path;
			String pr = command.substring(0, 10)+" "+fileName;
			System.out.println("path:"+path+" fileName:"+fileName+" CD:"+cd+" PR:"+pr);*/
			builder =  new ProcessBuilder("cmd.exe", "/C", command);
		} else {
			builder = new ProcessBuilder(command, command);
		}
		builder.redirectErrorStream(true);
		return builder;
	}

}
