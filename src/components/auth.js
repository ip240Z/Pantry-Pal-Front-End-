

export async function LoginPageContent(username, password) {
    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: {
            username,
            password,
        }
    })

    if (response.status !== 201) {
        throw new Error(`Request faild with status code ${response.status}`);
    }
    const { PantryPalJwtToken } = response.formData;
    localStorage.setitem('PantryPalJwtToken', PantryPalJwtToken);
    return PantryPalJwtToken
}


export async function signUp(username, password) {
    const response = await fetch('http://localhost:3003/register', {
        method: 'POST',
        body: {
            username,
            password,
        }
      });
    
      if (response.status !== 201) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    
      const { PantryPalJwtToken } = response.data;
      localStorage.setItem('PantryPalJwtToken', PantryPalJwtToken);
      return PantryPalJwtToken;
}


export function logout() {
    localStorage.removeItem('PantryPalJwtToken');
}

export function isLoggedIn() {
    const PantryPalJwtToken = localStorage.getItem('PantryPalJwtToken');
    return !!PantryPalJwtToken;
}

export async function getLoggedInUser() {
    const PantryPalJwtToken = localStorage.getItem('PantryPalJwtToken');

    if (!PantryPalJwtToken) {
        return null;
    }

    const response = await fetch('http://localhost:3003/User', {
        headers: {
            // Authorization: `Bearer ${PantryPalJwtToken}`
        }
    });

    return response.data;
}