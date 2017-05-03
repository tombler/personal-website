const express = require('express')
  , app = express()
  , pug = require('pug') //cache enabled by default
  , fs = require('fs')

app.use(express.static(__dirname + '/static'))
app.use('/vendor', express.static(__dirname + '/vendor/'))
app.set('view engine', 'pug')
// app.disable('view cache')

app.get('/', function (req, res) {
    res.render('index', { 
        title: 'Tom Griffey - Software Developer, Musician, Educator',
        projects: [
            {
                title: 'Synthesys',
                descrip: 'App for composing music in the browser using the Web Audio API, AngularJS and Bootstrap.',
                img_url: 'assets/synthesys_sq.png',
                url: 'https://synthesys.firebaseapp.com',
                private_repo: false
            },
            {
                title: 'Dart Music Website',
                descrip: 'Consumer-facing website for Dart Music using Materialize Design and PHP.',
                img_url: 'assets/dartmus_sq.png',
                url: 'projects/dartdata.io/',
                private_repo: false
            },
            {
                title: '1TB ETL Pipeline',
                descrip: 'Pipeline to ingest a 1TB database from a third-party server using Luigi (Python), Bash, and distrubted processing with the AWS suite.',
                img_url: 'assets/etl_sq.png',
                url: null,
                private_repo: true
            },
            // {
            //     title: 'BeerTynder',
            //     descrip: 'Social mobile web app for exploring and favoriting beers.',
            //     img_url: 'assets/beertynder_sq.png',
            //     url: 'https://beertynder.firebaseapp.com',
            //     private_repo: false
            // },
            {
                title: 'Metadata Cleanser',
                descrip: 'Application to cleanse product metadata using term extraction to generate keywords and Levenshtein distance to generate similarity scores between records.',
                img_url: 'assets/cleanser_sq.png',
                url: null,
                private_repo: true
            }
        ],
        contactLinks: [
            {
                title: 'Email',
                iconClass: 'fa-envelope',
                url: 'mailto:tom@thomasgriffey.com'
            },
            {
                title: 'Resume',
                iconClass: 'fa-file-text-o',
                url: 'resume'
            },
            {
                title: 'LinkedIn',
                iconClass: 'fa-linkedin',
                url: 'https://www.linkedin.com/in/tomgriffey'
            },
            {
                title: 'GitHub',
                iconClass: 'fa-github',
                url: 'https://github.com/tombler'
            }
        ]
    })
})

app.get('/resume', function (req, res) {
    // download PDF
    // var file = fs.createReadStream('./static/assets/tom_griffey_resume.pdf');
    // var stat = fs.statSync('./static/assets/tom_griffey_resume.pdf');
    // res.setHeader('Content-Length', stat.size);
    // res.setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', 'attachment; filename=tom_griffey_resume.pdf');
    // file.pipe(res);

    fs.readFile('./static/assets/tom_griffey_resume.pdf', function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})