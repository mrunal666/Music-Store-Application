import { Component, OnInit } from '@angular/core';
/*import { Observable, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Music } from '../../entities/music.entity';
import {  MusicService} from '../../service/music.service';

@Component({
	selector: 'app-search',
	templateUrl: 'index.component.html'
})
	
	export class SearchComponent implements OnInit{
		musics$: Observable<Music[]>;
		private searchTerms = new Subject<string>();
		
		constructor(
			private service: MusicService  
		){}
		musicSearch(search: string){
			this.searchTerms.next(search);
		}
	ngOnInit(): void{
		this.musics$ = this.searchTerms.pipe(
			debounceTime(300),
			distinctUntilChanged(),
			switchMap((search: string) => this.service.searchMusics(search))
		);
	}
	}*/
