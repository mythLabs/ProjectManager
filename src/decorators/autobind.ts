namespace App {
    export function autobind(
        _1: any, //target
        _2: string, //methodName
        descriptor: PropertyDescriptor
      ) {
        const originalMethod = descriptor.value;
    
        const newDescriptor: PropertyDescriptor = {
          configurable: true,
          get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
          },
        };
    
        return newDescriptor;
      }
}