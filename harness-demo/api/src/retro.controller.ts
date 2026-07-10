import { Body, Controller, Get, Post } from '@nestjs/common';

import { ColumnaId, RetroService, Tarjeta } from './retro.service';

interface NuevaTarjeta {
  columna: ColumnaId;
  texto: string;
  responsable?: string;
}

@Controller('api')
export class RetroController {
  constructor(private readonly retro: RetroService) {}

  @Get('tarjetas')
  listar(): Tarjeta[] {
    return this.retro.listar();
  }

  @Post('tarjetas')
  agregar(@Body() body: NuevaTarjeta): Tarjeta {
    return this.retro.agregar(body.columna, body.texto, body.responsable);
  }
}
