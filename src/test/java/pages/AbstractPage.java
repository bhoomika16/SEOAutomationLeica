package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public abstract class AbstractPage {

	WebDriver driver;

	public AbstractPage(WebDriver driver) {
		this.driver = driver;
	}

	public boolean isElementVisible(WebElement element) {

		boolean retval = false;
		int count = 0;
		do {
			try {
				retval = element.isDisplayed();

			} catch (Exception e) {
				// do nothing
			} finally {
				count++;
			}
			sleep(1);
		} while (count < 10 && !retval);

		return retval;
	}

	public abstract boolean at();

	public void waitToBeInPage() throws Exception {
		boolean isInPage = false;
		int count = 0;
		do {
			isInPage = at();
			count++;
			sleep(1);
		} while (count < 20 && !isInPage);

		if (!isInPage) {
			throw new Exception("in a different page");
		}
	}

	public void sleep(int sec) {
		try {
			Thread.sleep(sec * 1000);
		} catch (Exception e) {
			// do nothing
		}
	}

}
