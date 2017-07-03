{
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
    ];

    const people = [
        'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
        'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
        'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
        'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
        'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
        'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
        'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
        'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
        'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
    ];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter((inventor) => (
        inventor.year >= 1500 && inventor.year < 1600
    ));
    // one-liner below
    //const fifteen = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
    console.table(fifteen);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    const fullNames = inventors.map((inventor) => {
        return `${inventor.first} ${inventor.last}`
    });
    console.log(fullNames);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest (1473 - 1898)
    // bubbles up and down to sort
    const ordered = inventors.sort((a, b) => {
        return a.year - b.year; // ascending order
    });
    //const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : - 1));
    console.table(ordered);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);

    // 5. Sort the inventors by years lived
    // shortest = Ada Lovelace (1815 - 1852), longest = Lise Meitner (1878 - 1968)
    const longevity = inventors.sort((a, b) => {
        let personA = a.passed - a.year;
        let personB = b.passed - b.year;
        return personB - personA; // descending order
    });
    console.table(longevity);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // run below lines in console of wikipedia page
    const category = document.querySelector('.mw-category');
    if (category) {
        const links = Array.from(category.querySelectorAll('a')); // querySelectorAll returns NodeList. convert to array
        //const links = [...category.querySelectorAll('a')]; // convert NodeList to array using ES6 spread operator
        const de = links
                    .map(link => link.textContent) // NodeList does not have map function
                    .filter((streetName) => streetName.includes('de'));
        console.log(de);
    }

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alphaSort = people.sort((a, b) => {
        let [aLast, aFirst] = a.split(', ');
        let [bLast, bFirst] = b.split(', ');

        //console.log(aLast);
        let nameA = aLast.toUpperCase();
        let nameB = bLast.toUpperCase();
        return nameA < nameB ? -1 : 1; // ascending
    });
    console.log(alphaSort);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = [
        'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
        'walk', 'car', 'van', 'car', 'truck' 
    ];
    const sum = data.reduce((total, item) => {
        total[item] = total[item] + 1 || 1;
        return total;
    }, {});
    console.log(sum);
}

/*
    const and let are block scoped
    let variables can be updated
    let variables can only be declared once in the same block

    const variables cannot be updated, but
    the properties of a const object variable can be changed
    it just can't be reassigned entirely


    const person = {
        name: "Bob",
        age: 30
    }
    person.age = 29; // can be changed


    const joe = Object.freeze(person);
    joe.age = 28;
    console.log(joe.age); // 30

*/
