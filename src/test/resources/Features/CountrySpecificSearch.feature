Feature: Country specific search Functionality in Bing

  Scenario Outline: Test to verify that Leica-geosystems country specific site comes up as the top search result when we search with the keyword Leica-geosystems in country specific bing urls
    Given User is on Bing <country> home page
    And User accepts cookie
    When User searches for "leica geosystems"
    Then Verify that <first_search_result> comes up as the first search result

    Examples: 
      | country   | first_search_result          |
      | "Sweden"  | "leica-geosystems.com/sv-se" |
      | "UK"      | "leica-geosystems.com"       |
      | "France"  | "leica-geosystems.com/fr-FR" |
      | "Germany" | "leica-geosystems.com/de-de" |
