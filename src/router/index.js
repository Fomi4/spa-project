import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import SingleFilm from '../pages/Films/SingleFilm';
import Films from '../pages/Films';

import Character from '../pages/Character';

import Planets from '../pages/Planets';

import Species from '../pages/Species';

import Vehicles from '../pages/Vehicles';

import Starships from '../pages/Starships';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/films',
      name: 'Films',
      component: Films,
    },
    {
      path: '/films/:id',
      name: 'SingleFilm',
      component: SingleFilm,
    },
    {
      path: '/character',
      name: 'Characters',
      component: Character,
    },
    {
      path: '/planets',
      name: 'Planets',
      component: Planets,
    },
    {
      path: '/species',
      name: 'Species',
      component: Species,
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: Vehicles,
    },
    {
      path: '/starships',
      name: 'Starships',
      component: Starships,
    },
  ]
})