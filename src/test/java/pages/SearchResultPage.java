package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SearchResultPage extends AbstractPage {

	@FindBy(xpath = "//li[@class='b_algo'][1]//h2/a")
	private WebElement actualFirstResult;

	public SearchResultPage(WebDriver driver) throws Exception {
		super(driver);
		this.waitToBeInPage();
		PageFactory.initElements(driver, this);
	}

	public String getFirstSearchResultUrl() {
		new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(actualFirstResult));
		String actualFirstResultUrl = actualFirstResult.getAttribute("href");
		return actualFirstResultUrl;
	}

	@Override
	public boolean at() {
		return driver.getCurrentUrl().contains("https://www.bing.com/search");

	}

}
