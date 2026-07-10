import { BadRequestException } from '@nestjs/common';

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
});
