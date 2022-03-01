class Transport {
  constructor(type, price, vendor, model) {
    Transport.type = type;
    Transport.price = price;
    Transport.vendor = vendor;
    Transport.model = model;
  }

  getInfo() {
    return `${Transport.vendor}, ${Transport.model}`;
  }

  getPrice() {
    return Transport.price.toLocaleString('ru-RU') + ' ₽';
  }
}

class Car extends Transport {
  constructor(vendor, model, doorsCount, price) {
    super('car', price, vendor, model);
    Transport.doorsCount = doorsCount;
  }

  getDoorsCount() {
    return `Кол-во дверей: ${Transport.doorsCount}`;
  }
}

class Bike extends Transport {
  constructor(vendor, model, maxSpeed, price) {
    super('bike', price, vendor, model);
    Transport.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return `Макс. скорость: ${Transport.maxSpeed} км/ч`;
  }
}