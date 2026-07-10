import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

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

  @Patch('tarjetas/:id/votar')
  votar(@Param('id', ParseIntPipe) id: number): Tarjeta {
    return this.retro.votar(id);
  }
}
