const  baseUrl = "https://api.poiskkino.nomoredomains.sbs";

//функция ошибки
const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  export const register = ({name, password, email}) => {
    return fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, password, email})
    })
        .then(checkResponse);
};

export const authorize = ({name, password, email}) => {
    return fetch(`${baseUrl}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, password, email})
    })
        .then(checkResponse);
};

export const checkToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
        }
    })
        .then(checkResponse);
}