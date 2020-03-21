import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { MusicService } from '../../service/music.service';
import { Music } from 'src/app/entities/music.entity';


@Component({
	templateUrl: 'index.component.html'
})

export class DetailsComponent implements OnInit  {
	music$: Observable<Music>;
	
	constructor(private advancedroute: ActivatedRoute,
				private router: Router,
    			private service: MusicService
		) { }
	
	 ngOnInit() {
		this.music$ = this.advancedroute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMusic(params.get('id')))
    );
		}
		
}
