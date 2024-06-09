export class Repository {
  /**
   * Rota base da API.
   * @param {string} route
   */
  constructor(route) {
    this.url = `http://localhost:3000/${route}`;
  }

  /**
   * Busca todos os items e devolve em uma lista (array).
   * @returns {Promise<Array<any>>} Uma lista (array) dos objetos da API.
   */
  async list() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  /**
   * Busca um objeto especifico da API e o retorna.
   * @param {string} id Id do objeto a ser buscado.
   * @returns {Promise<any | null>} O objeto se encontrado ou null.
   */
  async get(id) {
    try {
      const response = await fetch(`${this.url}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  /**
   * Salva um novo objeto na API.
   * @param {*} obj Objeto a ser salvo.
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
   * @param {string} id Id do objeto a ser alterado.
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

  /**
   * Deleta o objeto existente na API.
   * @param {string} id Id do objeto a ser deletado.
   * @returns {any} objeto deletado da API.
   */
  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
}
