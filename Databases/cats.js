const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model('Cat', catSchema);

// var newCat = new Cat({
//     name: 'Alberto',
//     age: 12,
//     temperament: 'Huevon'
// });

// newCat.save((err, cat) => {
//     if(err)
//         console.log('Something went wrong');
//     else{
//         console.log('The cat was saved to the database');
//         console.log(cat);
//     }
// });

Cat.create({
    name: 'Tatiana',
    age: 4,
    temperament: 'Mad'
}, (err, cat) => {
    if(err)
        console.log(err);
    else
        console.log(cat);
});

//Retrieve all cats from the db and console.log each one

// Cat.find((err, cats) => {
//     if(err)
//     {
//         console.log('Error in find')
//         console.log(err);
//     }
//     else
//         console.log(cats);
// });
