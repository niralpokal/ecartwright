import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const IMAGE_API = '/api/images';
@Injectable()

export class ImageService {
    constructor (private http: Http) {}

    getHomeImages() {
        return this.http
            .get(`${IMAGE_API}/home`)
            .map((response: Response) => response.json());
    }

    getInstagramImages() {
        return this.http
            .get(`${IMAGE_API}/instagram`)
            .map((response: Response) => response.json());
    }

    getPortfolioImages() {
        return this.http
            .get(`${IMAGE_API}/portfolio`)
            .map((response: Response) => response.json());
    }
}
