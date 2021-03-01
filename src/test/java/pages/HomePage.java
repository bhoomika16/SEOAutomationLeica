package pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends AbstractPage {

	@FindBy(xpath = "//input[@id='sb_form_q']")
	private WebElement search;

	@FindBy(xpath = "//a[text()='Accept']")
	private WebElement cookie;

	public HomePage(WebDriver driver, String homePageUrl) throws Exception {
		super(driver);
		driver.get(homePageUrl);
		PageFactory.initElements(driver, this);
		this.waitToBeInPage();
	}

	public void acceptCookie() {
		cookie.click();
	}

	public SearchResultPage searchKeyword(String keyword) throws Exception {
		search.sendKeys(keyword);
		search.sendKeys(Keys.ENTER);
		SearchResultPage searchResultPage = new SearchResultPage(driver);
		return searchResultPage;
	}

	@Override
	public boolean at() {
		return (driver.getCurrentUrl().contains("bing.com") && isElementVisible(search));
	}

}