import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('speaker', { path: '/speakers' });
  this.route('book',  {path: '/books' });
  this.route('404', { path: '*path' });
  this.route('error');
  this.route('loading');
  this.route('meeting', { path: '/meetings' });
  this.route('report');
  this.route('book-create');
  this.route('meeting-create');
  this.route('report-create');
  this.route('speaker-create');
  this.route('speaker-edit', { path: 'speaker-edit/:id' });
  this.route('report-edit', { path: 'report-edit/:id' });
  this.route('meeting-edit', { path: 'meeting-edit/:id' });
  this.route('book-edit', { path: 'book-edit/:id' });
  this.route('login');
  this.route('register');
});

export default Router;
