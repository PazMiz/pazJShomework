

// כל המספרים בין 1 ל 20
let array = [];

for (let index = 0; index < 200; index++) {
    array[index] = index;
    if (array[index] >= 1 && array[index] <= 20) {
        console.log(array[index]);

    }

}


// כל המספרים בין 20 ל 30
for (let index = 20; index <= 30; index++) {
    console.log(array[index]);
}


//לרשום את השם שלנו 20 פעם

for (let index = 0; index < 20; index++) {
    console.log("paz");
}

//רוצה את כל המספרים בין 0 ל 100 שמתחלקים ב 3 ללא שארית

for (let index = 0; index < 100; index++) {
    if (array[index] % 3 == 0) {
        console.log(array[index])
    }



}





//כל המספרים בין 0 ל 100 שמתחלקים ב 5 או 7


for (let index = 0; index < 100; index++)
    if (array[index] % 7 == 0 || array[index] % 5 == 0) {
        console.log(array[index]);



    }


//תרגיל 2 - מערך של 10 מספרים רק את המספרים הזוגים

for (let index = 0; index < 10; index++) {
    if (array[index] % 2 == 0) {
        console.log(array[index]);

    }

}

//0 1 2 3 4 5 6 7 8 9 


// תרגיל מספר 3 - מערך 10 מספרים לקבל את לסכום את  המספרים

let sum = 0
for (let index = 0; index < 10; index++) {
    sum += array[index]
}
console.log(sum);


//  מערך של 0 עד 100 ולקבל שתי תוצאות הסכןם של הזוגיים והסכום של האי זוגיים

let sumOdd = 0
let sumEven = 0

for (let index = 0; index < 100; index++) {
    array[index] % 2 == 0 ? sumEven += array[index] : sumOdd += array[index];

}
console.log(sumEven)
console.log(sumOdd);

// FIZZBUZZ - מערך מ 0 עד 100 אם זה מתחלק ב 3 type fizz / אם זה מתחלק ב 5 type BUZZ // אם גם ב 5 וגם ב 3 לרשום FIZZBUZZ





for (let index = 0; index < 100; index++) {
    if (array[index] % 3 == 0) {
        console.log("Fizz Number is : " + array [index]);
    }
    if (array[index] % 5 == 0) {
        console.log("buzz Number is : " + array[index]);
    }

    if (array[index] % 3 == 0 && array[index] % 5 == 0) {

        console.log("FIzzBuzzzzzz Number is  : " + array[index]);
    }

}
// להגדיר מערך שמכיל סטרינגים, להדפיס רק את המילים שהם יותר מ 3 אותיות
let names = ["paz", "dor", "ovad", "ayala", "linoy", "mey"]
for (let index = 0; index < names.length; index++) {
    if (names[index].length > 3)
        console.log(names[index]);
}
//תרגיל  : לסכום את מספר האותיות במילים לדוגמא אם במילה יש 4 אותיות 4 ועוד כמה אותיות שיש במילה הבא
let sumNames = 0
for (let index = 0; index < names.length; index++) {
    sumNames += names[index].length
}
console.log(sumNames);
// לבחור מילה ולספור כמה פעמים היא מופיעה במערך שאתה בונה

let nameGroup = ["paz", "paz", "lior", "paz", "tamar", "paz", "dor", "linoy", "paz", "rotem", "yakir", "rotem",]
let name = "paz"
let counter = 0
for (let index = 0; index < nameGroup.length; index++) {
    if (nameGroup[index] == name) {
        counter++
    }
}
console.log("Number of times shown : " + counter);


//// לבחור מילה ולספור כמה פעמים היא מופיעה במערך שאתה בונה

let namenumber = ["dad", "mom", "sis", "mom", "yan", "yan", "yan"]
let user = "yan"
let count = 0
for (let index = 0; index < namenumber.length; index++) {
    if (namenumber[index] === user) {
        count++
    }

}
console.log("How much times this name shown : " + count); 



// לעשות מערך שמעורב עם מספרים ומילים ואז לסכום רק את המספרים לבדוק לפני זה האם זה סטרינג או מספר

let sumName = ["paz", 6, "Dor", 4]
let countnumbers = 0
for (let index = 0; index < sumName.length; index++) {
    if (Number(sumName[index]))
        countnumbers += sumName[index];
}
console.log(countnumbers);


// מערך מספרים שצריך למצוא את הממוצע שלו + את המספר הכי נמוך במערך והמספר הכי גבוה במערך

let marah = [50, 100, 150, 200, 5, 12, 51, 2, 125, 9395, 593, 9, 539, 359, 39, 359, 359, 359, 359, 395,]


let suM = 0
let avrage = 0

for (let i = 0; i < marah.length; i++) {
    suM += marah[i]

}
avrage = suM / marah.length

console.log("Avrage is", avrage);


let highnumber = marah[0]
let lownumber = marah[0]

for (let index = 0; index < marah.length; index++) {
        if (highnumber < marah[index]) {
        highnumber = marah[index]

        for (let index = 0; index < marah.length; index++) {
            if (lownumber > marah[index])
                lownumber = marah[index]
        }
    }
}
console.log("highnumber is", highnumber);
console.log("low number is", lownumber);


// :  לעשות מערך ולסכום רק את המספרים שנמוכים מהמספר שאני קובע.

let arrange = [2,4,6,8,10,55,99,5525,211]
let sum1 = 0 // סכום
let maxnumber = 100 // המספר הגבוה שבחרתי

for (let index = 0; index < arrange.length; index++) {
    if (arrange[index] < maxnumber) {
        sum1+=arrange[index]
        
    }
}
console.log(sum1);




