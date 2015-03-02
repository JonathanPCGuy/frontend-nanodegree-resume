

var work = {
  "jobs": [
    {
      "employer": "Hewlett-Packard",
      "title": "Software Engineer",
      "location": "Houston, TX",
      "description": "Manageability Software"
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
  ]
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

work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.

projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.

bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.

education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.