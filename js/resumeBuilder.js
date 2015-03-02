

var work = {
  "jobs": [
    {
      "employer": "Hewlett-Packard",
      "title": "Software Engineer",
      "location": "Houston, TX",
      "description": "Manageability Software",
      "dates": "May 2007 - current"
    }
  ]
};


var projects = {
  "projects": [
    {
      "title": "HP Touchpoint Manager",
      "dates": "January 2014 - current",
      "description": "Cloud-based Manageability",
      "images": [
        "images/hptpm1.jpg",
        "images/hptpm2.jpg"
      ]
    },
    {
      "title": "HP Client Integration Kit for Microsoft SCCM",
      "dates": "2013",
      "description": "Plugin for SCCM",
      "images": [
        "images/sccm1.jpg",
        "images/sccm2.jpg"
      ]
    }
  ],

};

// TODO: fix formatting
var bio = {
  "name"        : "Jonathan Lam",
  "role"        : "Software Engineer",
  "welcomeMessage" : "Welcome to my resume!",
  "contacts" : {
      "email"     : "fakeemail@gmail.com",
      "twitter"     : "JonathanPCGuy",
      "mobile"      : "(123) 456-7890",
      "github" : "JonathanPCGuy",
      "location": "Houston, TX"
  },
  "skills" : [
    "C++",
    "Java",
    "Ruby on Rails",
    "Javascript"
  ]
};

var education = {
  "schools":[
    {
      "name": "Texas A&M",
      "location": "College Station, TX",
      "degree": "B.S.",
      "majors": [
        "Computer Engineering"
        ],
      "dates": "2002 - 2007",
      "url": "http://www.tamu.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Nanodegree",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/nd001"
    }
  ]
};

var formattedHTML = function(template, text) {
  return template.replace("%data%", text);
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedNameRole = formattedName + formattedRole;
$("#nameAndPosition").append(formattedNameRole);

// is this formatted ok? TODO: fix
if (bio.skills.length > 0 ) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(currentValue, index, array) {
    var formattedSkill = formattedHTML(HTMLskills, currentValue);
    $("#skills").append(formattedSkill);
  });
}

projects.display = function() {
  for (pIndex in projects.projects) {
    var singleProject = projects.projects[pIndex];
    $("#projects").append(HTMLprojectStart);
    var projectHtml = formattedHTML(HTMLprojectTitle, singleProject.title);
    projectHtml = projectHtml.concat(formattedHTML(HTMLprojectDates, singleProject.dates));
    projectHtml = projectHtml.concat(formattedHTML(HTMLprojectDescription, singleProject.description));
    for(iIndex in singleProject.images)
    {
      var singleImage = singleProject.images[iIndex];
      projectHtml = projectHtml.concat(formattedHTML(HTMLprojectImage, singleImage));
    }
    $(".project-entry:last").append(projectHtml);
  }
}

projects.display();
/*
for(var i = 0; i < projects.projects.length; i++) {
  $("#projects").append(HTMLprojectStart);
  var formattedProjectTitle = formattedHTML(HTMLprojectTitle, projects.projects[i].title);
  var formattedProjectEntry = formattedProjectTitle;
  $(".project-entry:last").append(formattedProjectEntry);
}*/

var displayWork = function() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedDates = formattedHTML(HTMLworkDates, work.jobs[job].dates);
    var formattedLocation = formattedHTML(HTMLworkLocation, work.jobs[job].location);
    var formattedDescription = formattedHTML(HTMLworkDescription, work.jobs[job].description);
    var formattedEntry = formattedEmployer + formattedWorkTitle + formattedDates + formattedLocation + formattedDescription;
    $(".work-entry:last").append(formattedEntry);
  }
}

displayWork();

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var tokens = finalName.split(" ");

    var firstName = tokens[0];
    var lastName = tokens[1];

    firstName = firstName.toLowerCase();
    firstName = firstName[0].toUpperCase() + firstName.slice(1);
    lastName = lastName.toUpperCase();
    finalName = firstName + " " + lastName;
    console.log(finalName);
    // Don't delete this line!
    return finalName;
};

$("#mapDiv").append(googleMap);
