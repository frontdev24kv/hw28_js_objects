'use strict';

// 1.Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
const car = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2021,
  averageSpeed: 90,
  fuelTankCapacity: 60,
  fuelConsumption: 8,
  drivers: ['Bohdan', 'Serhii'],

  showInfo() {
    console.log(`Виробник: ${this.manufacturer}`);
    console.log(`Модель: ${this.model}`);
    console.log(`Рік випуску: ${this.year}`);
    console.log(`Середня швидкість: ${this.averageSpeed} км/год`);
    console.log(`Обсяг паливного баку: ${this.fuelTankCapacity} л`);
    console.log(`Середня витрата палива: ${this.fuelConsumption} л / 100 км`);
    console.log(`Водії: ${this.drivers.join(', ')}`);
  },

  addNewDriver(name) {
    if (!this.drivers.includes(name)) {
      console.log(`Driver ${name} added to drivers`);
      this.drivers.push(name);
    } else {
      console.log(`Such a driver ${name} already exists`);
    }
  },

  checkDriverInList(name) {
    if (name) {
      let message;
      this.drivers.includes(name)
        ? (message = `${name} is a ${this.manufacturer} ${this.model} driver.`)
        : (message = `${name} is not a ${this.manufacturer} ${this.model} driver.`);
      console.log(message);
    } else {
      console.log('Driver name is required');
    }
  },

  calculateTrip(distance) {
    const tineWithoutBreaks = distance / this.averageSpeed;
    const breaks = Math.floor(tineWithoutBreaks / 4);
    const totalTime = tineWithoutBreaks + breaks;
    const fuelNeeded = (distance / 100) * this.fuelConsumption;
    console.log(`It takes you about ${totalTime.toFixed()} hours to travel ${distance} km.`);
    console.log(`You need about ${fuelNeeded.toFixed()} liters of fuel to travel ${distance} km.`); 
  }
};

// car.addNewDriver("Ivan")
// car.checkDriverInList();
// car.showInfo()
// car.calculateTrip(250)
