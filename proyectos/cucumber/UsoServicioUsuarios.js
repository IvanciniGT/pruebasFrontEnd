
  // Ejemplo de uso
  const userService = new UserService('http://localhost:3000'); // Reemplaza con la URL de tu backend REST
  
  // Obtener todos los usuarios
  userService.getUsers((error, users) => {
    if (error) {
      console.error('Error al obtener usuarios:', error);
    } else {
      console.log('Usuarios:', users);
    }
  });
  
  // Obtener un usuario específico
  userService.getUser(1, (error, user) => {
    if (error) {
      console.error('Error al obtener usuario:', error);
    } else {
      console.log('Usuario:', user);
    }
  });
  
  // Crear un nuevo usuario
  const newUser = {
    nombre: 'John',
    apellidos: 'Doe',
    id: 2,
    edad: 30,
  };
  
  userService.createUser(newUser, (error, createdUser) => {
    if (error) {
      console.error('Error al crear usuario:', error);
    } else {
      console.log('Usuario creado:', createdUser);
    }
  });
  
  // Actualizar un usuario existente
  const updatedUser = {
    nombre: 'Jane',
    apellidos: 'Doe',
    id: 2,
    edad: 32,
  };
  
  userService.updateUser(2, updatedUser, (error, updatedUser) => {
    if (error) {
      console.error('Error al actualizar usuario:', error);
    } else {
      console.log('Usuario actualizado:', updatedUser);
    }
  });
  
  // Eliminar un usuario
  userService.deleteUser(2, (error, result) => {
    if (error) {
      console.error('Error al eliminar usuario:', error);
    } else {
      console.log('Resultado de eliminación:', result);
    }
  });
  