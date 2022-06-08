var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  // repeat and execute as long as the robot is alive
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose."
    );

    if (
      promptFight === "skip" ||
      promptFight === "Skip" ||
      promptFight === "SKIP"
    ) {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip this fight. Goodbye!");
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award money for winning
      playerMoney = playerMoney + 20;

      // leave while loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    var enemyDamage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - enemyDamage);
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

var startGame = function () {
  // Reset player stats
  var playerHealth = 100;
  var playerAttack = 10;
  var playerMoney = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = randomNumber(40, 60);
      // debugger;
      fight(pickedEnemyName);
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  // start again
  // startGame();
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min) + 40;

  return value;
};

var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like tor REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "REFILL":
    case "Refill":
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        playerHealth - playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }

      break;

    case "UPGRADE":
    case "Upgrade":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }

      break;

    case "LEAVE":
    case "Leave":
    case "leave":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      shop();
      break;
  }
};
// Start the game when the page loads
startGame();

// creampie = ["deliverance", "ineptitude", "postulation"];
