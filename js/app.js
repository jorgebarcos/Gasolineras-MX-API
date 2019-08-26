const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
	ui.mostarEstablecimientos();
});

// Habilitar búsqueda de establecimientos
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
	if (buscador.value.length > 5) {
		// Buscar en la api
		ui.obtenerSugerencias(buscador.value);
	} else {
		ui.mostarEstablecimientos();
	}
});
