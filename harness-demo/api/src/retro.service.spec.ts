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

  it('crea las tarjetas sin destacar por defecto', () => {
    const tarjeta = service.agregar('bien', 'salió muy bien el release');
    expect(tarjeta.destacada).toBe(false);
  });

  it('alterna el destacado de una tarjeta', () => {
    const tarjeta = service.agregar('mejorar', 'mejorar el onboarding');

    expect(service.destacar(tarjeta.id).destacada).toBe(true);
    expect(service.destacar(tarjeta.id).destacada).toBe(false);
  });

  it('lanza un error si la tarjeta a destacar no existe', () => {
    expect(() => service.destacar(999)).toThrow(NotFoundException);
  });
});
