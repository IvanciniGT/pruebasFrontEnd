class UserService {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    getUsers(callback) {
      fetch(`${this.baseUrl}/users`)
        .then((response) => response.json())
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    }
  
    getUser(userId, callback) {
      fetch(`${this.baseUrl}/users/${userId}`)
        .then((response) => response.json())
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    }
  
    createUser(user, callback) {
      fetch(`${this.baseUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    }
  
    updateUser(userId, user, callback) {
      fetch(`${this.baseUrl}/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    }
  
    deleteUser(userId, callback) {
      fetch(`${this.baseUrl}/users/${userId}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    }
  }
  