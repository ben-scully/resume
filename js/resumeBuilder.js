var work = {
	"jobs": [{
		"employer": "Trump Tower",
		"title": "Boss",
		"location": "Chicago, USA",
		"dates": "2004-2006",
		"description": "Lifting big heavy boxes from one side of the room to the other in an effort to bridge the gap."
	}, {
		"employer": "AE Ltd",
		"title": "Pleb",
		"location": "New York City, USA",
		"dates": "1999-2001",
		"description": "Bowing to the leader of the native tride how originally conquered the valley of truth."
	}]
}

var projects = {
	"projects": [{
		"title": "New Website",
		"dates": "2001-2003",
		"description": "Built blog style site.",
		"images": ["http://bookboon.com/blog/wp-content/uploads/2013/05/PuzzlePiece2.jpg"]
	}, {
		"title": "eCommerce Site",
		"dates": "1992-1995",
		"description": "Handles millions of sales per day.",
		"images": ["http://bookboon.com/blog/wp-content/uploads/2013/05/PuzzlePiece2.jpg"]
	}]
}

var bio = {
	"name": "Benjamin Scully",
	"role": "Student",
	"contacts": {
		"mobile": "027 555 555",
		"email": "ben@asdf.com",
		"github": '<a href="https://github.com/ben-scully/">BensGit</a>',
		"twitter": '<a href="https://twitter.com/Jumpman23/">@MJordan</a>',
		"location": "Wellington, NZ"
	},
	"welcomeMessage": "Welcome to Bens' CV. Here are lots of great reasons to hire Ben; ..... he wears pants.",
	"skills": ["Piano", "Chess", "Cheese", "Splinky", "DevilSticks", "Yo-Yo"],
	"bioPic": "images/me.jpg"
}

var education = {
	"schools": [{
		"name": "Vic University",
		"location": "Kelburn, Wellington, NZ",
		"degree": "BSc",
		"majors": ["Software", "Networks"],
		"dates": 2001,
		"url": "https://example.com"
	}, {
		"name": "AUT University",
		"location": "Auckland, NZ",
		"degree": "BSc",
		"majors": ["Programming"],
		"dates": 2004,
		"url": "https://example.com"
	}],
	"onlineCourses": [{
		"title": "JavaScript Syntx",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com"
	}]
}

/*
*		Bio
*/
bio.display = function() {
	// name & role & picture
	$("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
	$("#header").prepend(HTMLheaderName.replace('%data%', bio.name));
	$("#header").append(HTMLbioPic.replace('%data%', bio.bioPic));

	// contacts
	$("#topContacts").append(HTMLmobile.replace('%data%', bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace('%data%', bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace('%data%', bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
	$("#topContacts").append(HTMLlocation.replace('%data%', bio.contacts.location));

	// header = bio.skills
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			$("#skills").append(HTMLskills.replace('%data%', bio.skills[skill]));
		}
	}

	// header = bio.welcomeMessage
	$("#header").append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
}

/*
*		Work Experience
*/
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var empTitle = HTMLworkEmployer.replace('%data%', work.jobs[job]["employer"]);
		empTitle += HTMLworkTitle.replace('%data%', work.jobs[job]["title"]);
		$(".work-entry:last").append(empTitle);
		$(".work-entry:last").append(HTMLworkDates.replace('%data%', work.jobs[job]["dates"]));
		$(".work-entry:last").append(HTMLworkLocation.replace('%data%', work.jobs[job]["location"]));
		$(".work-entry:last").append(HTMLworkDescription.replace('%data%', work.jobs[job]["description"]));
	}
}

/*
*		Projects
*/
projects.display = function() {
	for (proj in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		$(".project-entry:last").append(HTMLprojectTitle.replace('%data%', projects.projects[proj]["title"]));
		$(".project-entry:last").append(HTMLprojectDates.replace('%data%', projects.projects[proj]["dates"]));
		$(".project-entry:last").append(HTMLprojectDescription.replace('%data%', projects.projects[proj]["description"]));

		if (projects.projects[proj].images.length > 0) {
			for (image in projects.projects[proj].images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data", projects.projects[proj].images[image]));
			}
		}
	}
}

/*
*		Education
*/
education.display = function() {
	for (edu in education.schools) {
		$("#education").append(HTMLschoolStart);

		var nameDeg = HTMLschoolName.replace('%data%', education.schools[edu]["name"]);
		nameDeg += HTMLschoolDegree.replace('%data%', education.schools[edu]["degree"]);
		$(".education-entry:last").append(nameDeg);
		$(".education-entry:last").append(HTMLschoolDates.replace('%data%', education.schools[edu]["dates"]));
		$(".education-entry:last").append(HTMLschoolLocation.replace('%data%', education.schools[edu]["location"]));
		$(".education-entry:last").append(HTMLschoolMajor.replace('%data%', education.schools[edu]["majors"]));
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
	}

	for (edu in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var titleSchool = HTMLonlineTitle.replace('%data%', education.onlineCourses[edu]["title"]);
		titleSchool += HTMLonlineSchool.replace('%data%', education.onlineCourses[edu]["degree"]);
		$(".education-entry:last").append(titleSchool);
		$(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[edu]["dates"]));
		$(".education-entry:last").append(HTMLonlineURL.replace('%data%', education.onlineCourses[edu]["url"]));
	}
}

bio.display();
work.display();
projects.display();
education.display();

// Internationalize Name Button
$("#main").append(internationalizeButton);
// Add Google Map for location
$("#mapDiv").append(googleMap);

function inName() {
	var both = bio.name.split(" ");
	var first = both[0][0].toUpperCase() + both[0].substring(1).toLowerCase();
	var last = both[1].toUpperCase();
	return first + " " + last;
};
