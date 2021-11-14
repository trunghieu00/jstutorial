function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Create prototype
const Person = function(fullName, age, email, gender, height, weight) {
    this.fullName = fullName;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.calculateBMI = () => {
        return this.weight / Math.pow(this.height, 2);
    };
    this.guessHealth = () => {
        let BMI = this.calculateBMI().toFixed(1);

        if (BMI < 18.5) {
            return "Underweight";
        }
        if (18.5 <= BMI <= 24.9) {
            return "Normal weight";
        }
        if (25 <= BMI <= 29.9) {
            return "Overweight";
        }
        return "Obesity";
    };
};

// Data arrays
const personsArr = [];
const limit = 10;
const names = [
    "hung",
    "khanh",
    "long",
    "phat",
    "hieu",
    "vinh",
    "huynh",
    "dan",
    "tam",
    "trung",
];
const ages = [20, 56, 33, 84, 70, 31];
const emails = [
    "abc@@edu.com.vn",
    "tyu@@edu.com.vn",
    "aaaaa@@edu.com.vn",
    "aaaaaccccccc@@edu.com.vn",
    "fuaaa@edu.com.vn",
];
const genders = ["male", "female", "other"];
const heights = [1.95, 1.4, 1.6, 1.68, 1.55, 1.42];
const weights = [95, 65, 49, 52, 55, 67];

for (let count = 0; count < limit; count++) {
    const person = new Person(
        names[randomInt(0, 9)],
        ages[randomInt(0, 5)],
        emails[randomInt(0, 4)],
        genders[randomInt(0, 2)],
        heights[randomInt(0, 5)],
        weights[randomInt(0, 5)]
    );
    personsArr.push(person);
}

const personpp = personsArr.map((obj) => {
    obj.BMI = obj.calculateBMI().toFixed(1);
    obj.healthStt = obj.guessHealth();

    return obj;
});