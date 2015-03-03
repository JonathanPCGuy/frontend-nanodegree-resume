

var work = {
  "jobs": [
    {
      "employer": "Hewlett-Packard",
      "title": "Software Engineer",
      "location": "Houston, TX",
      "description": "Manageability Software",
      "dates": "May 2007 - current"
    }
  ],
  display:  function() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkTitle = formatHTML(HTMLworkTitle, work.jobs[job].title);
    var formattedEmployer = formatHTML(HTMLworkEmployer, work.jobs[job].employer);
    var formattedDates = formatHTML(HTMLworkDates, work.jobs[job].dates);
    var formattedLocation = formatHTML(HTMLworkLocation, work.jobs[job].location);
    var formattedDescription = formatHTML(HTMLworkDescription, work.jobs[job].description);
    var formattedEntry = formattedEmployer + formattedWorkTitle + formattedDates + formattedLocation + formattedDescription;
    $(".work-entry:last").append(formattedEntry);
  }
}
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
  display: function() {

  for (pIndex in projects.projects) {
    var singleProject = projects.projects[pIndex];
    $("#projects").append(HTMLprojectStart);
    var projectHtml = formatHTML(HTMLprojectTitle, singleProject.title);
    projectHtml = projectHtml.concat(formatHTML(HTMLprojectDates, singleProject.dates));
    projectHtml = projectHtml.concat(formatHTML(HTMLprojectDescription, singleProject.description));
    for(iIndex in singleProject.images)
    {
      projectHtml = projectHtml.concat(formatHTML(HTMLprojectImage, singleProject.images[iIndex]));
    }
    $(".project-entry:last").append(projectHtml);

    }
  }
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
  ],

  "biopic" : "images/me.jpg",

  contactInfoString : function() {
    // better way to do this?
    var returnString = "";
    // TODO: does this do the null/undef/etc. check too?
    // i can just interate overthe wholecontacts object?
    returnString += formatIfStringPresent(HTMLemail,this.contacts.email);
    returnString += formatIfStringPresent(HTMLtwitter,this.contacts.twitter);
    returnString += formatIfStringPresent(HTMLmobile,this.contacts.mobile);
    returnString += formatIfStringPresent(HTMLgithub,this.contacts.github);
    returnString += formatIfStringPresent(HTMLblog,this.contacts.blog);
    returnString += formatIfStringPresent(HTMLlocation,this.contacts.location);

    console.log(returnString);
    return returnString;
  },
  // the function that calls all of the other display functions.
  // broken up for maintainability and readability
  display: function() {
    this.displayContactsInfo();
    this.displayNameAndRole();
    this.displayBiopic();
    this.displaySkills();
  },

  displayContactsInfo : function() {
    var contactString = this.contactInfoString();
    $('#topContacts').append(contactString);
    $('#footerContacts').append(contactString);
   },

  displayNameAndRole: function() {
    $("#nameAndPosition").append(formatHTML(HTMLheaderName, bio.name) + formatHTML(HTMLheaderRole, bio.role));
   },

  displaySkills: function() {
    if (this.skills.length > 0 ) {
      $("#header").append(HTMLskillsStart);
      this.skills.forEach( function(currentValue, index, array) {
        $("#skills").append(formatHTML(HTMLskills, currentValue));
      });
    }
  },

  displayBiopic: function() {
    $('#header').append(formatHTML(HTMLbioPic, this.biopic));
  }

}

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
  ],

  display: function() {
    this.displaySchools();
    this.displayOnlineCourses();
  },

  displaySchools : function() {
    for (iSchool in this.schools) {
    var singleSchool = this.schools[iSchool];
    $("#education").append(HTMLschoolStart);
    var schoolHtml = formatHTML(HTMLschoolName, singleSchool.name);
    schoolHtml += formatHTML(HTMLschoolDegree, singleSchool.degree);
    schoolHtml += formatHTML(HTMLschoolDates, singleSchool.dates);
    schoolHtml += formatHTML(HTMLschoolLocation, singleSchool.location);

    // todo: insert majors
    //schoolHtml += formatHTML(HTMLprojectLocation, singleSchool.dates));


    // url?
    $(".education-entry:last").append(schoolHtml);

    }
  },

  displayOnlineCourses: function() {

  }
};

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

// here we call all the functions defined above to

work.display();
projects.display();
bio.display();
education.display();
