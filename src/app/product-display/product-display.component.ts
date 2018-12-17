import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product-display',
	templateUrl: './product-display.component.html',
	styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

	private goods:Object[] = [
	{
		"idBien": 1,
		"nom": "Aspirateur",
		"descriptif": "Super outil pour faire le ménage.",
		"lienPhoto": "https://image.darty.com/petit_electromenager/aspirateur-avec_sac_sans_sac/aspirateur_avec_sac/electrolux_eus8green_p1709044349903A_153006299.jpg",
		"prixNeuf": 30,
		"type": "Menage"
	},
	{
		"idBien": 2,
		"nom": "Mixeur",
		"descriptif": "Peut aider dans certaines recettes.",
		"lienPhoto": "https://cdn6.elektronik-star.de/out/pictures/generated/product/5/700_700_75/10028562_titel_06_Klarstein_Herakles_Steel_Standmixer.jpg",
		"prixNeuf": 15,
		"type": "Cuisine"
	},
	{
		"idBien": 3,
		"nom": "Voiture Peugeot 206",
		"descriptif": "La voiture a 80 000km mais n'a jamais eu de problemes techniques.",
		"lienPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Peugeot_206_Quicksilver_90.jpg/1200px-Peugeot_206_Quicksilver_90.jpg",
		"prixNeuf": 4000,
		"type": "Automobile"
	},
	{
		"idBien": 4,
		"nom": "Perceuse",
		"descriptif": "Perceuse presque neuve",
		"lienPhoto": "https://media.bricoman.fr/article/0/5/0/8/0/770805-16.jpg",
		"prixNeuf": 35,
		"type": "Bricolage"
	}
	];

	constructor() { }

	ngOnInit() {
	}

}
