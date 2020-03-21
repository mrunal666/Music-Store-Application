import { Component, OnInit } from '@angular/core';

import { Music } from '../../entities/music.entity';
import { MusicService } from '../../service/music.service';

@Component({
	templateUrl: 'index.component.html'
})

export class MusicComponent implements OnInit{
	
	private musics: Music[];
	selectedMusic: Music;
	
	constructor(
		private musicService: MusicService
	) {}
	
	ngOnInit(){
		this.musics = this.musicService.findAll();
	}

}