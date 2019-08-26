class API {
	async obtenerDatos() {
		const total = 1000;
		// Obtener datos desde la api
		const datos = await fetch(`https://api.datos.gob.mx/v2/precio.gasolina.publico?pageSize=${total}`);

		// retornar datos como json
		const respuestaJSON = await datos.json();

		return {
			respuestaJSON
		};
	}
}
