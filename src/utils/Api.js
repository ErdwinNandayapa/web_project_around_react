class Api {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _fetch(url, options = {}) {
    return fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .catch((error) => console.error("Error:", error));
  }

  getInitialCards() {
    return this._fetch(`${this.baseUrl}/cards`, { headers: this.headers });
  }

  getUserInfo() {
    return this._fetch(`${this.baseUrl}/users/me`, { headers: this.headers });
  }
}

export const api = new Api("https://around.nomoreparties.co/v1/web_es_12/", {
  authorization: "8521445e-72d9-4062-8af0-0d806de221f7",
});
