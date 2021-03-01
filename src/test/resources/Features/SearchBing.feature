Feature: Search Functionality in bing

  Scenario: Test to verify that Leica-geosystems.com comes up as the top search result when we search with the keyword leica-geosystems
    Given User is on Bing home page
    And User accepts cookie
    When User searches for "leica geosystems"
    Then Verify that "leica-geosystems.com" comes up as the first search result
