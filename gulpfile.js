var gulp = require('gulp')

var fetch = require("isomorphic-fetch")

let url = 'https://hooks.slack.com/services/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'
let data = {
    text: "This is a test update: this should only be sent when I save a specific file."
}

gulp.task('update-slack',() => {
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then((response) => {
        response.json();
    })
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(err => console.error('Error:', err))
    return console.log("finished task")
})

gulp.task('watch', function(){
    gulp.watch('gatsby-config.js', gulp.series('update-slack'));
})

