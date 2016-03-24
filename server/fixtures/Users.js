USERS = typeof USERS !== 'undefined' ? USERS : [];

if (Meteor.settings.public.demo) {
	USERS = USERS.concat(Meteor.settings.public.demo,
		{
			"username": "Marine Desbord",
			"email": "marine.desbord@fake.gouv.fr",
			"password": "kljndxfihà_-sdfskjdfngl"
		}, {
			"username": "Thomas Joulier",
			"email": "thomas.joulier@fake.gouv.fr",
			"password": "dkvbjhxdkjbhnsglnsrlkjbxcvb234"
		}, {
			"username": "Fazim Wallid",
			"email": "fazim.wallid@fake.gouv.fr",
			"password": "dlkbhjvdkjl23jpEKJZ03940"
		}, {
			"username": "Kinta Moulié",
			"email": "kinta.moulie@fake.gouv.fr",
			"password": "lmksjvlmkjmklj213_°PKRP34I"
		}, {
			"username": "Carine Ponti",
			"email": "carine.ponti@fake.gouv.fr",
			"password": "fjklvhLMKJ2A309123U4JKNR"
		}
	);
}
