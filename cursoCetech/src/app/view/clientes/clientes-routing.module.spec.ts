import { ClientesRoutingModule } from './clientes-routing.module';

describe('ClientesRoutingModule', () => {
  let clientesRoutingModule: ClientesRoutingModule;

  beforeEach(() => {
    clientesRoutingModule = new ClientesRoutingModule();
  });

  it('should create an instance', () => {
    expect(clientesRoutingModule).toBeTruthy();
  });
});
