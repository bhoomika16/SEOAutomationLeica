package Glue;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;

public class BaseStepDefinition {

	public WebDriver driver;
	HashMap<String, String> bingUrls = new HashMap<String, String>();
	private static final String SWEDEN_BING_URL = "https://www.bing.se/";
	private static final String UK_BING_URL = "https://www.bing.co.uk/";
	private static final String FRANCE_BING_URL = "https://www.bing.fr/";
	private static final String GERMANY_BING_URL = "https://www.bing.de/";
	private static final String BING_URL = "https://www.bing.com/";

	public WebDriver createDriver() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		bingUrls.put("Sweden", SWEDEN_BING_URL);
		bingUrls.put("UK", UK_BING_URL);
		bingUrls.put("France", FRANCE_BING_URL);
		bingUrls.put("Germany", GERMANY_BING_URL);
		bingUrls.put("com", BING_URL);
		return driver;
	}

	public void destroy(Scenario s) throws IOException {

		try {
			if (s.isFailed()) {
				final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				s.embed(screenshot, "image/png");
			}
		} finally {
			driver.quit();
		}
	}

}
