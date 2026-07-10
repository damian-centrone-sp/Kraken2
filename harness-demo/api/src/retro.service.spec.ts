import { BadRequestException, NotFoundException } from '@nestjs/common';

import { RetroService } from './retro.service';

describe('RetroService', () => {
  let service: RetroService;

  beforeEach(() => {
    service = new RetroService();
  });

  it('agrega una tarjeta y la lista', () => {
    service.agregar('bien', 'salió muy bien el release');
    expect(service.listar()).toHaveLength(1);
  });

  it('rechaza tarjetas con texto vacío', () => {
    expect(() => service.agregar('bien', '   '))
      .toThrow(BadRequestException);
  });

  it('rechaza acciones sin responsable', () => {
    expect(() => service.agregar('acciones', 'automatizar el deploy'))
      .toThrow(BadRequestException);
  });

  it('crea las tarjetas con 0 votos', () => {
    const tarjeta = service.agregar('bien', 'salió muy bien el release');
    expect(tarjeta.votos).toBe(0);
  });

  it('suma un voto a la tarjeta', () => {
    const tarjeta = service.agregar('mejorar', 'mejorar el onboarding');

    expect(service.votar(tarjeta.id).votos).toBe(1);
    expect(service.votar(tarjeta.id).votos).toBe(2);
  });

  it('lanza un error si la tarjeta a votar no existe', () => {
    expect(() => service.votar(999)).toThrow(NotFoundException);
  });

  it('lista las tarjetas de más a menos votadas', () => {
    const primera = service.agregar('bien', 'primera');
    const segunda = service.agregar('bien', 'segunda');
    const tercera = service.agregar('bien', 'tercera');

    service.votar(segunda.id);
    service.votar(tercera.id);
    service.votar(tercera.id);

    expect(service.listar().map((t) => t.id)).toEqual([
      tercera.id,
      segunda.id,
      primera.id,
    ]);
  });
});
