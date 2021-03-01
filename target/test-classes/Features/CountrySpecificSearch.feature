Feature: Country specific Search Functionality in bing

  Scenario Outline: Searching from Bing home page
    Given User is on Bing <country> home page
    And User accepts cookie
    When User searches for "leica geosystems"
    And Verify that <first_search_result> comes up as the first search result

    Examples: 
      | country   | first_search_result          |
      | "Sweden"  | "leica-geosystems.com/sv-se" |
      | "UK"      | "leica-geosystems.com"       |
      | "France"  | "leica-geosystems.com/fr-FR" |
      | "Germany" | "leica-geosystems.com/de-de" |
