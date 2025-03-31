async function getLibros() {
    try {
        const response = await fetch('http://localhost:3001/libros', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

async function getLibro(id) {
    try {
        const response = await fetch('http://localhost:3001/libros/'+id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


//////////LLAMADO POST//////////

async function postLibros(usuario, libro,autor,editorial,genero, imagen) {
    try {
     
        const userData = { 
            usuario,
            libro,
            autor,
            editorial, 
            genero,
            imagen

        };

        const response = await fetch("http://localhost:3001/libros", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////


async function updateLibros(libro,autor,editorial, id) 
{
    try {
     
        const userData = { 
            libro,
            autor,
            editorial,
            id 
        };


        const response = await fetch("http://localhost:3001/libros/"+id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}


//////////////LLAMADO DELETE/////////////


async function deleteLibros(id) {
    try {
        const response = await fetch(`http://localhost:3001/libros/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default { deleteLibros, postLibros, updateLibros, getLibros, getLibro }