export class repository {
  /**
   * Rota base da API.
   * @param {string} route
   */
  constructor(route) {
    this.url = `http://localhost:3000/${route}`;
  }

  /**
   * Busca todos os items e devolve em uma lista (array).
   * @returns Uma lista (array) dos objetos da API.
   */
  async list() {
    const response = await fetch(this.url);
    const data = response.json();
    return data;
  }

  /**
   * Busca um objeto especifico da API e o retorna.
   * @param {number} id Id do objeto a ser buscado.
   * @returns O objeto se encontrado ou null.
   */
  async get(id) {
    const response = await fetch(`${this.url}/${id}`);
    const data = response.json();
    return data;
  }

  /**
   * Salva um novo objeto na API.
   * @param {object} obj Objeto a ser salvo.
   */
  async create(obj) {
    await fetch(this.url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }

  /**
   * Atualiza um objeto já existente na API.
   * @param {number} id Id do objeto a ser alterado.
   * @param {*} obj Novos dados do objeto.
   */
  async update(id, obj) {
    await fetch(`${this.url}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }
}
