const btnGen = document.getElementById('generateBtn');
const user = document.getElementsByTagName('user');

btnGen.addEventListener('click', () => {
	// stores faker API
	const info = faker.helpers.createCard();

	// destructure
	const {
		name,
		email,
		address: { city, country, zipcode },
	} = info;

	// console.log(info);

	document.querySelector('#name').value = name;
	document.querySelector('#email').value = email;
	document.querySelector('#city').value = city;
	document.querySelector('#zipcode').value = zipcode;
	document.querySelector('#country').value = country;

	// example from docs
	console.log(
		faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}')
	);
});
