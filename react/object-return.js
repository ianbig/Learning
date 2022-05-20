const person = (firstname, lastname) => ({first: firstname, last: lastname});
console.log(person('Ian', 'Liu'));

const tahoe = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: function(delay = 1000) {
      setTimeout(() => {
          console.log(this);          
          console.log(this.mountains.join(", "));
    }, delay);
  }
};

tahoe.print(); // Freel, Rose, Tallac, Rubicon, Silver
