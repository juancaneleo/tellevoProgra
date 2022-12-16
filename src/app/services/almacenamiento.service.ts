import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlmacenamientoService {

  
	private _storage: Storage | null = null;

	constructor(private storage: Storage) {
		this.init();
	}

	async init() {
		const storage = await this.storage.create();
		this._storage = storage;
	}

	async set(key: string, value: any) {
		await this._storage?.set(key, value);
	}

	async get(key: string) {
		return await this._storage?.get(key);
	}
	
	async remove(key: string) {
		return await this._storage?.remove(key);
	}

}
