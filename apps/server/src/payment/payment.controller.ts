import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { MercadopagoService } from '../mercadopago/mercadopago.service';
import { PaypalService } from '../paypal/paypal.service';
import { paypalItemDto } from 'src/dto/paypal-item.dto';
import { mercadoItemDto } from 'src/dto/mercadopago-item.dto';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly mercadopagoService: MercadopagoService,
    private readonly paypalService: PaypalService,
  ) {}

  @Post('mercadopago')
  async createPayment(@Body() items: mercadoItemDto[], @Res() res) {
    try {
      const preference = await this.mercadopagoService.createPayment(items);
      if (!preference) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .send('No se pudo crear la preferencia de pago');
      }
      return res.status(HttpStatus.OK).json(preference.body.init_point);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ 'Error al procesar el pago': error });
    }
  }

  @Post('paypal/create')
  async createPaypalPayment(@Body() items: paypalItemDto, @Res() res) {
    try {
      const order = await this.paypalService.createOrder(items);

      if (!order) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .send('No se pudo crear la preferencia de pago');
      }

      return res.status(HttpStatus.OK).json(order.data.links[1]);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ 'Error al procesar el pago': error });
    }
  }

  @Get('paypal/capture')
  async capturepaypalPayment(@Req() req, @Res() res) {
    try {
      const { token } = req.query;

      const response = await this.paypalService.captureOrder(token);

      if (!response) {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send('Ocurrio un error completando el pago');
      }

      return res.status(HttpStatus.OK).send('Payment copmlete');
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send('Ocurrio un error completando el pago');
    }
  }
}
