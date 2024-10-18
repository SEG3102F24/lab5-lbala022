import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {environment} from "../environments/environment.development";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //provideFirebaseApp(() => initializeApp({"projectId":"my-employee-app-cf155","appId":"1:336430001389:web:38c42a636586b33db770e4","storageBucket":"my-employee-app-cf155.appspot.com","apiKey":"AIzaSyADyE-qI1VpOxtUR2JU1F_J6KHNX9zR7Us","authDomain":"my-employee-app-cf155.firebaseapp.com","messagingSenderId":"336430001389","measurementId":"G-29GW16YC65"})),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ]
};
