import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../entities/item.entity';
import { MusicService } from '../../service/music.service';

	@Component({
		templateUrl: 'index.component.html'
	})

export class CartComponent implements OnInit{
	
	private items: Item[] = [];
	private total: number = 0;
	 
	constructor(
		private activatedRoute: ActivatedRoute,
		private musicService: MusicService
	){}
	
	ngOnInit(){
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if(id){
				var item: Item = {
					music: this.musicService.find(id),
					Quantity: 1
				};
			if (localStorage.getItem('cart') == null){
				let cart: any = [];
				cart.push(JSON.stringify(item));
				localStorage.setItem('cart', JSON.stringify(cart));
			}
			else{
				let cart: any = JSON.parse(localStorage.getItem('cart'));
				let index: number = -1;
				for(var i = 0; i< cart.length; i++){
					let item: Item = JSON.parse(cart[i]);
					if(item.music.id == id){
						index = i;
						break;
					}
				}
				if (index == -1){
					cart.push(JSON.stringify(item));
					localStorage.setItem("cart", JSON.stringify
					(cart));
				}
				else{
					let item: Item = JSON.parse(cart[index]);
					item.Quantity += 1;
					cart[index] = JSON.stringify(item);
					localStorage.setItem("cart", JSON.stringify(cart));
				}
			}
			this.loadCart();
			}
			else{
				this.loadCart();
			
			}
		});
	}
	
	loadCart(): void{
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i< cart.length; i++){
			let item = JSON.parse(cart[i]);
			this.items.push({
				music: item.music,
				Quantity: item.Quantity
			});
			this.total += item.music.price * item.Quantity;
		}
	}
	
	remove(id: string): void{
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++){
			let item: Item = JSON.parse(cart[i]);
			if(item.music.id ==+ id){
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
		
	}
	
}