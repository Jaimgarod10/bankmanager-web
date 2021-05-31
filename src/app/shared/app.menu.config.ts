import {
  MenuRootItem,

} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'books', name: 'BOOKS', icon: 'books', route: '/main/books' },
  { id: 'users', name: 'USERS', icon: 'people', route: '/main/users' },
  { id: 'authors', name: 'AUTHORS', icon: 'person', route: '/main/authors' },
  { id: 'loans', name: 'LOANS', icon: 'backpack', route: '/main/loans' },
  { id: 'instances', name: 'INSTANCES', icon: 'article', route: '/main/instances' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'logout', confirm: 'yes' }
];
