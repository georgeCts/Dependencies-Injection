import type { User } from './types';
import { createIoCContainer } from './ioc';

const ioc = createIoCContainer();

const renderUsers = async () => {
  const usersService = ioc.resolve('users');
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  renderUsers();
};

window.onload = (event: Event) => {
  const logger = ioc.resolve('logger');

  logger.log('info', 'Page is loaded.');

  app();
};
