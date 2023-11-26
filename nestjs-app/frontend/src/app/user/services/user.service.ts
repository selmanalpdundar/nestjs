import { environment } from 'frontend/src/environments/environment';
export class UserServıce {
  async getUsers() {
    const url = `${environment.serverUrl}/users`;
    return (await (await fetch(url)).json()).users as User[];
  }

  createUser() {}

  updatUser() {}

  deleteUser() {}
}
