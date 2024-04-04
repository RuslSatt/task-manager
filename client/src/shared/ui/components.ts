import { app } from '@/main';

import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Card from 'primevue/card';
import Password from 'primevue/password';
import Calendar from 'primevue/calendar';

export function registrationComponents() {
	app.component('p-checkbox', Checkbox);
	app.component('p-button', Button);
	app.component('p-input-text', InputText);
	app.component('p-dialog', Dialog);
	app.component('p-card', Card);
	app.component('p-password', Password);
	app.component('p-calendar', Calendar);
}
