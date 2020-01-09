const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yelp_camp', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//YelpCamp's schema
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String, 
    description: String
});

var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create({
//     name: 'Mount Denou', 
//     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BmMykZhuarXohfafIC9FWqCW_ffTaCbNv0soalfi3FxmnN8T',
//     description: 'The most beautiful mount you could ever visit. It\'s the best camp site in the world and its wonderfulness will amaze you!' 
// }, (err, cmpg) => {
//     if(err)
//         console.log(err);
//     else
//         console.log(cmpg);
// });

app.get('/', (req, res) => {
    res.render('landing');
});

//INDEX ROUTE
app.get('/campgrounds', (req, res) => {
    //res.render('campgrounds', {campgroundsArray: campgroundsArray});
    //Get all campgrounds
    /*
        Notice that the find function of the mongoose schema returns an array not an iteration or somekind of function
        returning a single object, instead returning all the objects inside a DB.
    */
    Campground.find((err, campgroundsDBArray) => {
        if(err)
            console.log(err);
        else
            res.render('index', {campgroundsArray: campgroundsDBArray});
    });
});

//NEW ROUTE
app.get('/campgrounds/new', (req, res) => {
    res.render('newCG');
});

//CREATE ROUTE
app.post('/campgrounds', (req, res) => {
    //Get data from form and add to campgrounds array
    var name = req.body.cName;
    var img = req.body.cImage;
    var desc = req.body.cDescription;
    var newCampground = {name: name, image: img, description: desc};
    Campground.create(newCampground, (err, newCG) => {
        if(err)
            console.log(err);
        else
            res.redirect('/campgrounds');
    });
});

//SHOW PAGE
app.get('/campgrounds/:cgID', (req, res) => {
    //find the campground with the provided ID
    Campground.findById(req.params.cgID, (err, foundCG) => {
        if(err)
            console.log(err);
        else
            res.render('show', {cg: foundCG});
    });
});

app.listen(3000, () => {
    console.log("YelpCamp server has started!");
});