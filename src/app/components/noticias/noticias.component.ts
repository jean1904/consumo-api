import {Component, OnInit} from '@angular/core';
import {NoticiasService} from '../../services/noticias.service';

@Component({
    selector: 'app-noticias',
    templateUrl: './noticias.component.html',
    styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

    news: any;
    buscar: any;

    constructor(private noticias: NoticiasService) {
    }

    ngOnInit() {
		this.executePost();
    }

    executePost() {
		let busqueda = this.buscar ? this.buscar : '';
        const params = {
            buscar: busqueda,
        };

        this.noticias.methodPost(params).subscribe(response => {
            // lo que sea con la data
            this.news = response;
        });

    }

}
