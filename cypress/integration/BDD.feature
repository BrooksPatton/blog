Feature: Authentication

    Authors, and only authors should be able to authenticate to manage their articles.

    @login
    Scenario: Logging In
        Given I am on the page "/login"
        Then I see "/login" in the url