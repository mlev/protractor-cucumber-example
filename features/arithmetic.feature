Feature: Arithmetic Operations
  As a user of the calculator
  I would like access to basic arithmetic operations
  So that I can perform simple calculations

  Scenario: Add numbers
    Given The calculator is open
     When I calculate 1 + 2
     Then the result should equal 3

  Scenario: Should use add operator by default
    Given The calculator is open
     When I enter first value of 10
      And I enter second value of 7
      And I click Go
     Then the result should equal 17

  Scenario: Subtract numbers
    Given The calculator is open
     When I calculate 15 - 7
     Then the result should equal 8

  Scenario: Multiply numbers
    Given The calculator is open
     When I calculate 10 * 9
     Then the result should equal 90

  Scenario: Divide numbers
    Given The calculator is open
     When I calculate 10 / 2
     Then the result should equal 5

  Scenario: Modulo numbers
    Given The calculator is open
     When I calculate 26 % 11
     Then the result should equal 4
