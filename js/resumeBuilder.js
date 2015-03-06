// within JSON-like objects I went with double-quotes because
// that is how JSON is like and that is what the lessons showed
// i went with single quotes in the more 'javascript' parts of the code

var work = {
  "jobs": [
    {
      "employer": "Hewlett-Packard",
      "title": "Software Engineer",
      "location": "Houston, TX",
      "dates": "May 2007 - November 2013",
      "description": "Manageability Software"
    },
    {
      "employer": "Hewlett-Packard",
      "title": "Senior Software Engineer",
      "location": "Houston, TX",
      "dates": "November 2013 - current",
      "description": "Manageability Software"
    }
  ],
  display:  function() {
    this.jobs.forEach(function(job) {
      $('#workExperience').append(HTMLworkStart);
      var formattedJob = formatHTML(HTMLworkEmployer, job.employer);
      formattedJob += formatHTML(HTMLworkTitle, job.title);
      formattedJob += formatHTML(HTMLworkDates, job.dates);
      formattedJob += formatHTML(HTMLworkLocation, job.location);
      formattedJob += formatHTML(HTMLworkDescription, job.description);
      $('.work-entry:last').append(formattedJob);
    });
  }
};

var projects = {
  "projects": [
    {
      "title": "HP Touchpoint Manager",
      "dates": "January 2014 - current",
      "description": "Cloud-based Manageability solution. Worked on various client and server side components.",
      "images": [
        "images/hptpm1.jpg",
        "images/hptpm2.png"
      ]
    },
    {
      "title": "HP Client Integration Kit for Microsoft SCCM",
      "dates": "2013",
      "description": "Plugin for Microsoft's System Center Configuration Manager to enhance bare-metal image deployment for HP computers.",
      "images": [
        "images/sccm1.png"
      ]
    }
  ],

  display: function() {
    this.projects.forEach(function(project) {
      $('#projects').append(HTMLprojectStart);
      var projectHtml = formatHTML(HTMLprojectTitle, project.title);
      projectHtml = projectHtml.concat(formatHTML(HTMLprojectDates, project.dates));
      projectHtml = projectHtml.concat(formatHTML(HTMLprojectDescription, project.description));
      project.images.forEach(function(image) {
        projectHtml = projectHtml.concat(formatHTML(HTMLprojectImage, image));
      });
      $('.project-entry:last').append(projectHtml);
    });
  }
};

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

  // the function that calls all of the other display functions.
  // broken up for maintainability and readability
  display: function() {
    this.displayContactsInfo();
    this.displayNameAndRole();
    this.displayBiopic();
    this.displayWelcomeMessage();
    this.displaySkills();
  },

  contactInfoString : function() {
    var returnString = "";
    returnString += formatIfStringPresent(HTMLemail,this.contacts.email);
    returnString += formatIfStringPresent(HTMLtwitter,this.contacts.twitter);
    returnString += formatIfStringPresent(HTMLmobile,this.contacts.mobile);
    returnString += formatIfStringPresent(HTMLgithub,this.contacts.github);
    returnString += formatIfStringPresent(HTMLblog,this.contacts.blog);
    returnString += formatIfStringPresent(HTMLlocation,this.contacts.location);

    console.log(returnString);
    return returnString;
  },

  displayWelcomeMessage : function() {
    $('#header').append(formatHTML(HTMLWelcomeMsg, this.welcomeMessage));
  },

  displayContactsInfo : function() {
    var contactString = this.contactInfoString();
    $('#topContacts').append(contactString);
    $('#footerContacts').append(contactString);
   },

  displayNameAndRole: function() {
    $('#nameAndPosition').append(formatHTML(HTMLheaderName, bio.name) + formatHTML(HTMLheaderRole, bio.role));
   },

  displaySkills: function() {
    if (this.skills.length > 0 ) {
      $('#header').append(HTMLskillsStart);
      this.skills.forEach( function(skill) {
        $('#skills').append(formatHTML(HTMLskills, skill));
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
      "dates": 2007,
      "url": "http://www.tamu.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Nanodegree",
      "school": "Udacity",
      "date": "2015",
      "url": "https://www.udacity.com/course/nd001"
    }
  ],

  // the function that calls all of the other display functions.
  // broken up for maintainability and readability
  display: function() {
    this.displaySchools();
    this.displayOnlineCourses();
  },

  displaySchools : function() {
    this.schools.forEach(function(school) {
      $('#education').append(HTMLschoolStart);
      var schoolHtml = formatHTML(HTMLschoolName, school.name);
      schoolHtml += formatHTML(HTMLschoolDegree, school.degree);
      schoolHtml += formatHTML(HTMLschoolDates, school.dates);
      schoolHtml += formatHTML(HTMLschoolLocation, school.location);
      school.majors.forEach(function(major) {
        schoolHtml += formatHTML(HTMLschoolMajor, major);
      });
      $('.education-entry:last').append(schoolHtml);
    });
  },

  displayOnlineCourses: function() {
    if(this.onlineCourses.length > 0) {
      $('#education').append(HTMLonlineClasses);
      this.onlineCourses.forEach(function(course) {
        $('#education').append(HTMLschoolStart);
        var courseHtml = formatHTML(HTMLonlineTitle, course.title);
        courseHtml += formatHTML(HTMLonlineSchool, course.school);
        courseHtml += formatHTML(HTMLonlineDates, course.date);
        courseHtml += formatHTML(HTMLonlineURL, course.url);
        $('.education-entry:last').append(courseHtml);
      });
    }
  }
};

$('#mapDiv').append(googleMap);

// here we call all the functions defined above to build the resume

work.display();
projects.display();
bio.display();
education.display();