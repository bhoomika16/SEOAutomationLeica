# SEOAutomationLeica

**What are we testing** 

we are mainly testing the below 2 scenarios :

**Scenario 1 :** Test to verify that leica geosystems comes up as the first search result when we perform a search with the keyword 'leica geosystems' on bing.

**Scenario 2 :** Test to verify that leica geosystems country specific website comes up as the top search result when we perform a search with the keyword 'leica geosystems' on country specific bing urls

**Instructions on how to run the tests:**

**Prerequisites:**

Chrome should be installed as the tests have been currently written for chrome only (can extend it to other browsers if i get time).

Java and maven should be installed

**Steps:**

1) Clone the repo in your local machine 

2) Open command prompt

3) Change the directory to the path where the project has been cloned

suppose you have cloned it to c drive in your local machine the a command like below has to be written:

cd C:\SEOAutomationLeica

4) After the directory gets changed, run the command:

mvn clean install

5) And that is it, it should run all the 5 test cases which I have written

6) After the test cases are executed , you should be able to view the test report in the below path:
SEOAutomationLeica\target\cucumber-report\index.html
