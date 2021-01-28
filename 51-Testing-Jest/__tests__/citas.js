import Citas from '../js/classes/Citas';

describe('Probar la clase de citas', () => {
  const citas = new Citas();

  const id = Date.now();

  test('Agregar una nueva cita', () => {
    const citaObj = {
      id,
      mascota: 'Roco',
      propietario: 'Marco',
      telefono: '33434321',
      fecha: '10-12-2020',
      hora: '10:30',
      sintomas: 'Solo duerme',
    };

    citas.agregarCita(citaObj);

    // Prueba
    expect(citas).toMatchSnapshot();
  });

  test('Actualizar cita', () => {
    const citaActualizada = {
      id,
      mascota: 'Kiara',
      propietario: 'Marco',
      telefono: '33434321',
      fecha: '10-12-2020',
      hora: '10:30',
      sintomas: 'Solo duerme',
    };

    citas.editarCita(citaActualizada);

    expect(citas).toMatchSnapshot();
  });

  test('Eliminar una cita', () => {
    citas.eliminarCita(id);

    expect(citas).toMatchSnapshot();
  });
});
