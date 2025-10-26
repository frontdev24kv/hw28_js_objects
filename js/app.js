'use strict';

const showTime = document.querySelector('.show-time');

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
    console.log(
      `It takes you about ${totalTime.toFixed()} hours to travel ${distance} km.`
    );
    console.log(
      `You need about ${fuelNeeded.toFixed()} liters of fuel to travel ${distance} km.`
    );
  }
};

// car.addNewDriver("Ivan")
// car.checkDriverInList();
// car.showInfo()
// car.calculateTrip(250)

// 2.Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

class Time {
  constructor(hours, minutes, seconds = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.normalize();
  }

  static showCurrentTime() {
    const h = new Date().getHours().toString().padStart(2, '0');
    const m = new Date().getMinutes().toString().padStart(2, '0');
    const s = new Date().getSeconds().toString().padStart(2, '0');
    showTime.textContent = `Current time: ${h}:${m}:${s}`;
  }

  displayTime() {
    const h = this.hours.toString().padStart(2, '0');
    const m = this.minutes.toString().padStart(2, '0');
    const s = this.seconds.toString().padStart(2, '0');
    console.log(`${h}:${m}:${s}`);
  }

  addSeconds(sec) {
    this.seconds += sec;
    this.normalize();
  }

  addMinutes(min) {
    this.minutes += min;
    this.normalize();
  }

  addHours(hr) {
    this.hours += hr;
    this.normalize();
  }

  normalize() {
    if (this.seconds >= 60 || this.seconds < 0) {
      const extraMinutes = Math.floor(this.seconds / 60);
      this.seconds = ((this.seconds % 60) + 60) % 60;
      this.minutes += extraMinutes;
    }

    if (this.minutes >= 60 || this.minutes < 0) {
      const extraHours = Math.floor(this.minutes / 60);
      this.minutes = ((this.minutes % 60) + 60) % 60;
      this.hours += extraHours;
    }

    this.hours = ((this.hours % 24) + 24) % 24;
  }
}

Time.showCurrentTime();
setInterval(() => {
  Time.showCurrentTime();
}, 1000);

const myTime = new Time(14, 34, 18);
myTime.displayTime();

myTime.addHours(10);
myTime.addMinutes(50);
myTime.addSeconds(100);
myTime.displayTime();
