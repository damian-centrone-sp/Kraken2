import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

export type ColumnaId = 'bien' | 'mejorar' | 'acciones';

export interface Tarjeta {
  id: number;
  columna: ColumnaId;
  texto: string;
  responsable?: string;
  destacada: boolean;
}

const COLUMNAS: ColumnaId[] = ['bien', 'mejorar', 'acciones'];

@Injectable()
export class RetroService {
  private tarjetas: Tarjeta[] = [];
  private siguienteId = 1;

  agregar(columna: ColumnaId, texto: string, responsable?: string): Tarjeta {
    if (!COLUMNAS.includes(columna)) {
      throw new BadRequestException('esa columna no existe');
    }
    if (!texto?.trim()) {
      throw new BadRequestException('el texto no puede estar vacío');
    }
    if (columna === 'acciones' && !responsable?.trim()) {
      throw new BadRequestException('toda acción necesita un responsable');
    }
    const tarjeta: Tarjeta = {
      id: this.siguienteId++,
      columna,
      texto: texto.trim(),
      responsable: responsable?.trim() || undefined,
      destacada: false,
    };
    this.tarjetas.push(tarjeta);
    return tarjeta;
  }

  destacar(id: number): Tarjeta {
    const tarjeta = this.tarjetas.find((t) => t.id === id);
    if (!tarjeta) {
      throw new NotFoundException('esa tarjeta no existe');
    }
    tarjeta.destacada = !tarjeta.destacada;
    return tarjeta;
  }

  listar(): Tarjeta[] {
    return [...this.tarjetas];
  }
}
