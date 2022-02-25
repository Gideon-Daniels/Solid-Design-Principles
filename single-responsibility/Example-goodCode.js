/* 
Resources From : https://www.youtube.com/watch?v=UQqY3_6Epbg&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=7
App Name : Calorie Tracker

Principle : All of your classes , modules , functions , 
            anything in your code that can be put in a
            single part should have one responsibilty.
            It should only have one reason to change.
*/

// import external function
import logMessage from "./logger";
class CaloriesTracker {
    constructor(maxCalories) {
      this.maxCalories = maxCalories;
      this.currentCaloriess = 0;
    }
  
    trackCalories(caloriesCount) {
      this.currentCalories += caloriesCount;
      if (this.currentCalories > this.maxCalories) {
        // log message function is only responsible for logging a message and is separated from this classes
        logMessage('Max colories exceeded')
      }
    }

  }
  
  const calorieTracker = new CaloriesTracker(2000);
  calorieTracker.trackCalories(500);
  calorieTracker.trackCalories(1000);
  calorieTracker.trackCalories(700);