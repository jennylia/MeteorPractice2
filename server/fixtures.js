if(Posts.find().count() ===0){
	Posts.insert({
		title: 'Introducting Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/'
	});

	Posts.insert({
		title: 'Meteor Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/'
	});

	Posts.insert({
		title: 'The Meteor Book',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/'
	});
}