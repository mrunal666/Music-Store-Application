import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Music } from '../entities/music.entity';

@Injectable()
export class MusicService{
	private musicsUrl = 'api/musics'
	private musics: Music[];
	
	constructor(
		private http: HttpClient
	){
		this.musics = [
			{"id":1,"title":"Friends","length":"Marshmello & Anne Marie","desp":"Friends (stylized in all caps) is a song by American record producer Marshmello and English singer Anne-Marie. It was written and produced by Marshmello, with additional writing from Anne-Marie, Eden Anderson, Richard Boardman, Jasmine Thompson, Nat Dunn, Sarah Blanchard and Pablo Bowman. The song was released via Joytime Collective and Asylum Records on February 9, 2018, as the fifth single from Anne-Marie's debut studio album, Speak Your Mind (2018). A lyric video was released on the same day.","price": 5,"thumbnail":"music.friends.jpg","audio":"audio.friends.mp3"},
			{"id":2,"title":"Demons","length":"Imagine Dragons","desp":"Demons is a song by American rock band Imagine Dragons. It was written by Imagine Dragons and Alex da Kid, and produced by Alex da Kid. The song appears on their major-label debut extended play Continued Silence and also makes an appearance on their debut studio album Night Visions as the fourth track. Demons was solicited to American triple-A radio stations on January 28, 2013 and to modern rock stations on April 1 and serves as the album's overall fifth single and was released as the third single from Night Visions in the United States","price":10 ,"thumbnail":"music.demons.jpg","audio":"audio.demons.mp3"},
			{"id":3,"title":"Shape of You","length":"ED Sheeran","desp":"Shape of You is a song by English singer-songwriter Ed Sheeran. It was released as a digital download on 6 January 2017 as one of the double lead singles from his third studio album (2017), along with Castle on the Hill.The dancehall-infused pop song was written by Ed Sheeran, Steve Mac and Johnny McDaid. Due to its interpolation of No Scrubs by TLC, Kandi Burruss, Tameka Tiny Cottle, and Kevin She'kspere Briggs are also credited as writers. The song was produced by Sheeran and Mac.","price": 30,"thumbnail":"music.shapeofyou.jpg","audio":"audio.shapeofyou.mp3"},
			{"id":4,"title":"Taki Taki","length":"DJ Snake, Selena Gomez, Ozuna Cardi B","desp":"Taki Taki is a song by French DJ and record producer DJ Snake featuring vocals from American singer Selena Gomez, Puerto Rican singer Ozuna and American rapper Cardi B. The song was released on 28 September 2018 as the second single from DJ Snake's second studio album Carte Blanche.It was written by DJ Snake, Gomez, Ozuna, Cardi B, Ava Brignol, Jordan Thorpe, Juan Vasquez and Vicente Saavedra. Its music video, directed by Colin Tilley was released on 9 October 2018, which featured the four artists dancing in a lava-drenched crater of a volcano.","price":30,"thumbnail":"music.taki.jpg","audio":"audio.taki.mp3"},
			{"id":5,"title":"Attention","length":"Charlie Puth","desp":"Attention is a song recorded and produced by American singer Charlie Puth. Co-written with Jacob Kasher, the track was released through Artist Partner Group and Atlantic Records on April 21, 2017, as the lead single from Puth's second studio album, Voicenotes (2018). Attention is a midtempo pop rock song with elements of 1980s soft-soul and funk. ","price": 30,"thumbnail":"music.attention.jpg","audio":"audio.attention.mp3"}
			];
	}
	findAll(): Music[]{
		return this.musics;
	}
	
	find(id:string): Music{
		return this.musics[this.getSelectedIndex(id)];
	}
	
	 getSelectedIndex(id:string){
		for (var i=0;i<this.musics.length; i++){
			if(this.musics[i].id ==+ id){
				return i;
			}
		}
		return -1;
	}
	
	getMusics(): Observable<Music[]>{
		return of(this.musics);
	}
	
	
	
	getMusic(id: number | string){
		return this.getMusics().pipe(
			map((musics: Music[])=> musics.find(music=> music.id === +id))
		);
	}
	
/*	searchMusics(search: string): Observable<Music[]>{
		if(!search.trim){
			return of([]);
		}
		return this.musics[(`title=${search}`)];
	}*/
	

  
}