Feature: Search Functionality in bing

  Scenario: Searching from Bing home page
    Given User is on Bing home page
    And User accepts cookie
    When User searches for "leica geosystems"
    And Verify that "leica-geosystems.com" comes up as the first search result
