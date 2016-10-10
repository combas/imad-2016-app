var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = 
    Article-One: {
    title: "Article One : Baskaran Mathavan",
    heading: "Article One",
    date: "Oct 10, 2016", 
    content: '
            <p>
                This is my content for my first Article,This is my content for my first Article,This is my content for my first Article,This is my content for my first Article,This is my content for my first Article,This is my content for my first Article.
            </p>
           
),
    Article-Two: (title: "Article Two : Baskaran Mathavan",
    heading: "Article Two",
    date: "Oct 10, 2016", 
    content: '
            <p>
                This is my content for my Second Article.
            </p>
           
),
    Article-Three: (title: "Article Three : Baskaran Mathavan",
    heading: "Article Three",
    date: "Oct 10, 2016", 
    content: '
            <p>
                This is my content for my Third Article.
            </p>
),
    };
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmltemplate = "
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-sc=1">
                    <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
            <div class="container">
                <div>
                    <o href="/">Home</o>
                </div>
                <hr/>
                 <h3>
                    ${heading}
                 </h3>
                <div>
                    ${date}
                </div>
                <div>
                     ${content}
                </div>
            </div>    
            </body>
        </html>
        ";
        return htmlTemplate;


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/: articlename', function (req, res) {
    // articlename = article=one
    // articles[articlename] = {} content object for article One
    var articlename = re.params articleone;
  res.send(createTemplate (articles[articleOne]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
