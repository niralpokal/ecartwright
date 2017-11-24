import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const IMAGE_API = '/images';
@Injectable()

export class ImageService {
    constructor (private http: HttpClient) {}

    getHomeImages() {
        return this.http
            .get(`${IMAGE_API}`);
    }

    getInstagramImages() {
        return this.http
            .get(`${IMAGE_API}/instagram`);
    }

    getPortfolioImages() {
        return this.http
            .get(`${IMAGE_API}/portfolio`);
    }
}
