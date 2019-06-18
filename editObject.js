const data = [
	{
		name: "Tatas",
		company: "Arkademy",
		job: "Trainer",
		status: "single",
		city: "Jogja"
	},
	{
		name: "Pratama",
		company: "Emago",
		job: "Trainer",
		status: "single",
		city: "Jakarta"
	}
];

const datas = [
	{
		...data[0], status: "married", city: "Jakarta"
	},
	{
		...data[1], city: "Jogja"
	}
]

console.log(datas);

