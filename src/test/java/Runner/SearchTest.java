package Runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"pretty", "html:target/cucumber-report","json:target/cucumber-report.json"},
		features={"src/test/resources/Features"},
		glue={"classpath:Glue"},
		monochrome = true
		)
public class SearchTest {

}
