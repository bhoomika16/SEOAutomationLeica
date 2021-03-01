$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CountrySpecificSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Country specific search Functionality in Bing",
  "description": "",
  "id": "country-specific-search-functionality-in-bing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Country specific search from Bing home page",
  "description": "",
  "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Bing \u003ccountry\u003e home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User accepts cookie",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User searches for \"leica geosystems\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify that \u003cfirst_search_result\u003e comes up as the first search result",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page;",
  "rows": [
    {
      "cells": [
        "country",
        "first_search_result"
      ],
      "line": 10,
      "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page;;1"
    },
    {
      "cells": [
        "\"Sweden\"",
        "\"leica-geosystems.com/sv-se\""
      ],
      "line": 11,
      "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page;;2"
    },
    {
      "cells": [
        "\"UK\"",
        "\"leica-geosystems.com\""
      ],
      "line": 12,
      "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page;;3"
    },
    {
      "cells": [
        "\"France\"",
        "\"leica-geosystems.com/fr-FR\""
      ],
      "line": 13,
      "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page;;4"
    },
    {
      "cells": [
        "\"Germany\"",
        "\"leica-geosystems.com/de-de\""
      ],
      "line": 14,
      "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7205879500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Country specific search from Bing home page",
  "description": "",
  "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Bing \"Sweden\" home page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User accepts cookie",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User searches for \"leica geosystems\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify that \"leica-geosystems.com/sv-se\" comes up as the first search result",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Sweden",
      "offset": 17
    }
  ],
  "location": "BingSearchStepDefinition.user_is_on_Bing_home_page(String)"
});
formatter.result({
  "duration": 3562480600,
  "status": "passed"
});
formatter.match({
  "location": "BingSearchStepDefinition.user_accepts_cookie()"
});
formatter.result({
  "duration": 210656700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leica geosystems",
      "offset": 19
    }
  ],
  "location": "BingSearchStepDefinition.user_searches_for(String)"
});
formatter.result({
  "duration": 2162385700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leica-geosystems.com/sv-se",
      "offset": 13
    }
  ],
  "location": "BingSearchStepDefinition.verify_that_comes_up_as_the_first_search_result(String)"
});
formatter.result({
  "duration": 315977500,
  "status": "passed"
});
formatter.after({
  "duration": 919837800,
  "status": "passed"
});
formatter.before({
  "duration": 1687190100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Country specific search from Bing home page",
  "description": "",
  "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Bing \"UK\" home page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User accepts cookie",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User searches for \"leica geosystems\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify that \"leica-geosystems.com\" comes up as the first search result",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "UK",
      "offset": 17
    }
  ],
  "location": "BingSearchStepDefinition.user_is_on_Bing_home_page(String)"
});
formatter.result({
  "duration": 3405831800,
  "status": "passed"
});
formatter.match({
  "location": "BingSearchStepDefinition.user_accepts_cookie()"
});
formatter.result({
  "duration": 1223703800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leica geosystems",
      "offset": 19
    }
  ],
  "location": "BingSearchStepDefinition.user_searches_for(String)"
});
formatter.result({
  "duration": 2319298200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leica-geosystems.com",
      "offset": 13
    }
  ],
  "location": "BingSearchStepDefinition.verify_that_comes_up_as_the_first_search_result(String)"
});
formatter.result({
  "duration": 225770600,
  "status": "passed"
});
formatter.after({
  "duration": 839917500,
  "status": "passed"
});
formatter.before({
  "duration": 1633231400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Country specific search from Bing home page",
  "description": "",
  "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Bing \"France\" home page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User accepts cookie",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User searches for \"leica geosystems\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify that \"leica-geosystems.com/fr-FR\" comes up as the first search result",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "France",
      "offset": 17
    }
  ],
  "location": "BingSearchStepDefinition.user_is_on_Bing_home_page(String)"
});
formatter.result({
  "duration": 3605062500,
  "status": "passed"
});
formatter.match({
  "location": "BingSearchStepDefinition.user_accepts_cookie()"
});
formatter.result({
  "duration": 244602100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leica geosystems",
      "offset": 19
    }
  ],
  "location": "BingSearchStepDefinition.user_searches_for(String)"
});
formatter.result({
  "duration": 2032166100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leica-geosystems.com/fr-FR",
      "offset": 13
    }
  ],
  "location": "BingSearchStepDefinition.verify_that_comes_up_as_the_first_search_result(String)"
});
formatter.result({
  "duration": 790284400,
  "status": "passed"
});
formatter.after({
  "duration": 882993900,
  "status": "passed"
});
formatter.before({
  "duration": 1686635800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Country specific search from Bing home page",
  "description": "",
  "id": "country-specific-search-functionality-in-bing;country-specific-search-from-bing-home-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Bing \"Germany\" home page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User accepts cookie",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User searches for \"leica geosystems\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify that \"leica-geosystems.com/de-de\" comes up as the first search result",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Germany",
      "offset": 17
    }
  ],
  "location": "BingSearchStepDefinition.user_is_on_Bing_home_page(String)"
});
formatter.result({
  "duration": 3426769700,
  "status": "passed"
});
formatter.match({
  "location": "BingSearchStepDefinition.user_accepts_cookie()"
});
formatter.result({
  "duration": 490177700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leica geosystems",
      "offset": 19
    }
  ],
  "location": "BingSearchStepDefinition.user_searches_for(String)"
});
formatter.result({
  "duration": 2242628000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leica-geosystems.com/de-de",
      "offset": 13
    }
  ],
  "location": "BingSearchStepDefinition.verify_that_comes_up_as_the_first_search_result(String)"
});
formatter.result({
  "duration": 1252101900,
  "status": "passed"
});
formatter.after({
  "duration": 1203468200,
  "status": "passed"
});
formatter.uri("SearchBing.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality in bing",
  "description": "",
  "id": "search-functionality-in-bing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1665120400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Searching from Bing home page",
  "description": "",
  "id": "search-functionality-in-bing;searching-from-bing-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Bing home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User accepts cookie",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User searches for \"leica geosystems\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify that \"leica-geosystems.com\" comes up as the first search result",
  "keyword": "And "
});
formatter.match({
  "location": "BingSearchStepDefinition.user_is_on_Bing_home_page()"
});
formatter.result({
  "duration": 3209497000,
  "status": "passed"
});
formatter.match({
  "location": "BingSearchStepDefinition.user_accepts_cookie()"
});
formatter.result({
  "duration": 143571100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leica geosystems",
      "offset": 19
    }
  ],
  "location": "BingSearchStepDefinition.user_searches_for(String)"
});
formatter.result({
  "duration": 2448056300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leica-geosystems.com",
      "offset": 13
    }
  ],
  "location": "BingSearchStepDefinition.verify_that_comes_up_as_the_first_search_result(String)"
});
formatter.result({
  "duration": 162955300,
  "status": "passed"
});
formatter.after({
  "duration": 828234600,
  "status": "passed"
});
});