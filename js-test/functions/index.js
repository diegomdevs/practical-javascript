function printInfo(name, middlename, surname, lastname, nickname) {
  const fullname = `${name} ${middlename} ${surname} ${lastname}`;
  console.log(
    `Hello, my name is ${fullname} but I prefer that you call me ${nickname}.`
  );
}
printInfo("Diego", "Miguel", "Gonzalez", "Calero", "Thiegom");
