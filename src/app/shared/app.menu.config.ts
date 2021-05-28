import {
  MenuRootItem,

} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'books', name: 'BOOKS', icon: 'books', route: '/main/books' },
  { id: 'instances', name: 'INSTANCES', icon: 'article', route: '/main/instances' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
