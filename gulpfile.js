const { src, dest, watch, task } = require('gulp') 
var argv = require('yargs').argv 
var exec = require('child_process').exec 
var spawn = require('child_process').spawn 
var mergeStream = require('merge-stream') 
var Fiber = require('fibers') 
var randomString = require('random-string') 
var slug = require('slug')
var replace = require('gulp-replace') 
var concat = require('gulp-concat') 


function getPosts(count = argv.count,section = argv.section){
  if(!section){
    section = "posts" 
  }
  console.log('getPosts') 
  var commands = [] 
  for (var index = 1;  index <= count;  index ++) {
    var d = new Date() 
    commands.push("hugo new --kind lorem-post "+section+"/"+section+"-"+slug(d.getMonth()+"-"+d.getDate()+"-"+d.getTime()+"-"+d.getMilliseconds()+index)+".md")
  }
  console.log(commands) 
  return commands 
}

function getDecisions(count = argv.count){
  var commands = [] 
  for (var index = 1;  index <= count;  index ++) {
    var d = new Date() 
    commands.push("hugo new --kind lorem-decision practice-areas/decisions/decision-"+slug(d.getMonth()+"-"+d.getDate()+"-"+d.getTime()+"-"+d.getMilliseconds()+index)+".md")
  }
  return commands 
}

function getLocations(count = argv.count){
  var commands = [] 
  for (var index = 1;  index <= count;  index++) {
    var d = new Date() 
    commands.push("hugo new --kind lorem-location locations/location-"+slug(d.getMonth()+"-"+d.getDate()+"-"+d.getTime()+"-"+d.getMilliseconds()+index)+".md")
  }
  return commands 
}

function getTestimonials(count = argv.count){
  var commands = [] 
  for (var index = 1;  index <= count;  index ++) {
    var d = new Date() 
    commands.push("hugo new --kind lorem-testimonial testimonials/testimonial-"+slug(d.getMonth()+"-"+d.getDate()+"-"+d.getTime()+"-"+d.getMilliseconds()+index)+".md")
  }
  return commands 
}

function getCaseStudies(count = argv.count){
  var commands = [] 
  for (var index = 1;  index <= count; index ++) {
    var d = new Date() 
    commands.push("hugo new --kind lorem-case-study case-studies/case-study-"+slug(d.getMonth()+"-"+d.getDate()+"-"+d.getTime()+"-"+d.getMilliseconds()+index)+".md")
  }
  return commands 
}


function loremAttorneys(cb) {
  console.log('loremAttorney: getting Hugo commands')
  const commands = getAttorneys() 
  console.log(commands) 
  runCommands(cb,commands)
}

function loremAreas(cb) {
  console.log('loremArea: getting Hugo commands')
  const commands = getAreas()
  runCommands(cb,commands)
}

function loremPosts(cb) {
  console.log('loremPosts: getting Hugo commands')
  const commands = getPosts()
  runCommands(cb,commands)
}

function loremLocations(cb) {
  console.log('loremLocations: getting Hugo commands')
  const commands = getLocations()
  runCommands(cb,commands)
}

function loremTestimonials(cb) {
  console.log('loremTestimonials: getting Hugo commands')
  const commands = getTestimonials()
  runCommands(cb,commands)
}

function loremCaseStudies(cb) {
  console.log('loremCaseStudies: getting Hugo commands')
  const commands = getCaseStudies()
  runCommands(cb,commands)
}

function loremSite(cb) {
  console.log('loremArea')
  let commands = [] 
  commands.push.apply(commands, getAttorneys(6))
  commands.push.apply(commands, getAreas(3))
  commands.push.apply(commands, getTestimonials(3))
  commands.push.apply(commands, getCaseStudies(19))
  commands.push.apply(commands, getPosts(13))
  // commands.push.apply(commands, getDecisions(30))
  console.log(commands) 
  runCommands(cb,commands)
}

function runCommands(cb,commands=false){
  if(commands[0]){
    runCommand(cb,commands) 
  }else{
    cb() 
  }
}

function runCommand(cb,commands=false){
  if(commands){
    let command = commands[0] 
    commands.shift()
    exec(command, function (err, stdout, stderr) {
      console.log(stdout) 
      console.log(stderr) 
      runCommands(cb,commands)
    })
  }
}

function setupVariables(cb) {
  console.log('Creating new site variables.')
  src('public/site-vars/**/*.scss')
  .pipe(replace('',''))
  .pipe(replace(' ;',';'))
  .pipe(dest('assets/sass/site-vars'))
  return console.log('New site variables created.')
  cb()
}

function setupSite(cb){
  let commands = []
  commands.push("rm -r assets/sass/site-vars")
  commands.push("rm -r public")
  commands.push("hugo")
  commands.push("gulp getVars")
  runCommands(cb,commands)
}

exports.loremAttorneys = loremAttorneys 
exports.loremAreas = loremAreas 
exports.loremLocations = loremLocations 
exports.loremCaseStudies = loremCaseStudies 
exports.loremTestimonials = loremTestimonials 
exports.loremPosts = loremPosts 
exports.loremSite = loremSite 
exports.getVars = setupVariables
exports.setupSite = setupSite
