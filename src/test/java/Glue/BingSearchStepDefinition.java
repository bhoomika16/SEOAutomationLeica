package Glue;

import java.io.IOException;
import java.util.HashMap;
import org.openqa.selenium.WebDriver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.HomePage;
import pages.SearchResultPage;

public class BingSearchStepDefinition extends BaseStepDefinition {

	
	HashMap<String, String> bingUrls = new HashMap<String, String>();
	HomePage homePage;
	SearchResultPage searchResultPage;

	@Before
	public void setUp() {
		driver = createDriver();
		bingUrls.put("Sweden", "https://www.bing.se/");
		bingUrls.put("UK", "https://www.bing.co.uk/");
		bingUrls.put("France", "https://www.bing.fr/");
		bingUrls.put("Germany", "https://www.bing.de/");
		bingUrls.put("com", "https://www.bing.com/");
	}

	@Given("^User is on Bing home page$")
	public void user_is_on_Bing_home_page() throws Throwable {
		homePage = new HomePage(driver, bingUrls.get("com"));
	}

	@Given("^User is on Bing \"([^\"]*)\" home page$")
	public void user_is_on_Bing_home_page(String country) throws Throwable {
		homePage = new HomePage(driver, bingUrls.get(country));
	}

	@Given("^User accepts cookie$")
	public void user_accepts_cookie() throws Throwable {
		homePage.acceptCookie();
	}

	@When("^User searches for \"([^\"]*)\"$")
	public void user_searches_for(String keyword) throws Throwable {
		searchResultPage = homePage.searchKeyword(keyword);
	}

	@When("^Verify that \"([^\"]*)\" comes up as the first search result$")
	public void verify_that_comes_up_as_the_first_search_result(String expectedFirstResultUrl) throws Throwable {
		String actualFirstResultUrl = searchResultPage.getFirstSearchResultUrl();
		Assert.assertTrue("failed because " + actualFirstResultUrl + " did not contain " + expectedFirstResultUrl,
				actualFirstResultUrl.contains(expectedFirstResultUrl));
	}

	@After
	public void TearDown(Scenario scenario) throws IOException {
		destroy(scenario);

	}

}