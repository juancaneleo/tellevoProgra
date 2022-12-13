import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get, onValue } from 'firebase/database';
import { NumericValueAccessor } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor() {}

  app = initializeApp(environment.firebaseConfig);

  database = getDatabase(this.app);

  addRegistro(id, nombre, numero, tipo) {
    set(ref(this.database, 'usuarios/' + id), {
      id: id,
      nombre: nombre,
      numero: numero,
      tipo: tipo,
    });
  }

  verificar(identifier) {
    const dbRef = ref(getDatabase(this.app));
    get(child(dbRef, `usuarios/${identifier}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  addViaje(comuna, userid, numero) {
    set(ref(this.database, 'viajes/' + userid), {
      userid: userid,
      comuna: comuna,
      numero: numero,
    });
  }

  mostrarViajes(userid) {
    const db = getDatabase();
    const starCountRef = ref(db, 'posts/' + userid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }
}
