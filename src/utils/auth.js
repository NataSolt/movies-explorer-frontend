const  BASEURL = "https://api.poiskkino.nomoredomains.sbs";
// const BASEURL= "http://localhost:3005";




//функция ошибки
const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

export const register = (name, email, password) => {
  return fetch(`${BASEURL}/signup`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(name, email, password)
  })
      .then(checkResponse)
};



export const authorize = (data) => {
  console.log( data)
    return fetch(`${BASEURL}/signin`, {
        // mode: 'no-cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(checkResponse);
};




export const checkToken = (token) => {
  console.log(BASEURL)
    return fetch(`${BASEURL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
        }
    })
        .then(checkResponse);
}