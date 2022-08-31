const subscriptionType = "Free";
if (subscriptionType != "Free") {
  if (subscriptionType != "Basic") {
    if (subscriptionType != "Expert")
      console.log(
        "You and someone else can watch all Platzi courses  in a year"
      );
    else {
      console.log("You can watch almost all courses in a year");
    }
  } else {
    console.log("You can watch almost all courses in a month");
  }
} else {
  console.log("You can only watch free courses");
}

/* Bonus */
/* let subscriptions = ["Free", "Basic", "Expert", "ExpertPlus"];
let subscriptionBenefits = [
  "You can only watch free courses",
  "You can watch almost all courses in one month",
  "You can watch almost all courses in one year",
  "You and someone else can watch all courses in one year",
];
for (let i = 0; i < typeSubscription.length; i++) {
  if (userSubscription == typeSubscription[i]) {
    console.log(infoSubscription[i]);
  }
} */
const subscription = "Basic";
const subscriptions = {
  Basic: "You can watch almost all courses in one month",
  Expert: "You can watch almost all courses in one year",
  ExpertPlus: "You and someone else can watch all courses in one year",
};
if (subscription === "Free") {
  console.log("You can only watch free courses");
  return;
}
console.log(subscriptions[subscription]);
