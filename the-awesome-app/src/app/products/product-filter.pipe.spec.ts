import { Product } from '../model/Product';
import { ProductFilterPipe } from './product-filter.pipe';

fdescribe('ProductFilterPipe', () => {

  it('create an instance', () => {

    const pipe = new ProductFilterPipe();
    expect(pipe).toBeTruthy();

  });

  it('should return the input for no searchkey', () => {

    const pipe = new ProductFilterPipe();
    const input = [
      new Product(1, "p1", 30000, "p1 desc"),
      new Product(2, "p2", 40000, "p2 desc"),
      new Product(3, "p3", 50000, "p3 desc")

    ]
    const output = pipe.transform(input, "");
    expect(output).toBe(input);
    expect(output.length).toBe(3);

  })

  it('should return the filtered products for a searckkey', () => {

    const pipe = new ProductFilterPipe();
    const input = [
      new Product(1, "p1", 30000, "p1 desc"),
      new Product(2, "p2", 40000, "p2 desc"),
      new Product(3, "p3", 50000, "p3 desc")

    ]
    const output = pipe.transform(input, "p2");
    expect(output.length).toBe(1);
    const product = output[0];
    expect(product.id).toBe(2);

  })


});
