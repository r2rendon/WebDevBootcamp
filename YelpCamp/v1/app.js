const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var campgroundsArray = [
    {name: 'Salmon Creek', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyu6WbGUyomhR84QeX3hU2PRUAi7lm8FuH73qsbe8oOIifE9mY6w'}, 
    {name: 'Mount Denou', image:'https://www.revistatoxicshock.com/wp-content/uploads/2019/07/bca19684-d902-422d-8de2-f083e77b50ff_image2_GettyImages-677064730.jpg'},
    {name: 'Artu Hill', image:'https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg'}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {campgroundsArray: campgroundsArray});
});

app.get('/campgrounds/new', (req, res) => {
    res.render('newCG');
});

app.post('/campgrounds', (req, res) => {
    //Get data from form add to campgrounds array
    var name = req.body.cName;
    var img = req.body.cImage;
    var newCampgground = {name: name, image: img};
    campgroundsArray.push(newCampgground);
    //Redirect to campgrounds page
    res.redirect('/campgrounds');
});

app.listen(3000, () => {
    console.log("YelpCamp server has started!");
});