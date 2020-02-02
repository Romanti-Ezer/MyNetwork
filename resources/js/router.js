import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from './components/HomeComponent';
import ContactsIndex from './views/ContactsIndex';
import ContactsCreate from './views/ContactsCreate';
import ContactsShow from './views/ContactsShow';
import ContactsEdit from './views/ContactsEdit';
import BirthdaysIndex from './views/BirthdaysIndex';
import Logout from './actions/Logout';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/', component: HomeComponent,
            meta: { title: 'Welcome' }
        },
            {
            path: '/contacts', component: ContactsIndex,
            meta: { title: 'Contacts' }
        },
            {
            path: '/contacts/create', component: ContactsCreate,
            meta: { title: 'Add New Contact' }
        },
            {
            path: '/contacts/:id/', component: ContactsShow,
            meta: { title: 'Details for Contact' }
        },
            {
            path: '/contacts/:id/edit', component: ContactsEdit,
            meta: { title: 'Edit Contact' }
        },
            {
            path: '/birthdays', component: BirthdaysIndex,
            meta: { title: 'This Month\'s Birthdays' }
        },
            {
            path: '/logout', component: Logout
        }
    ],
    mode: 'history'
});