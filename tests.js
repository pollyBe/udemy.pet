/*function getCoupeNumber(seat) {
  if (typeof (seat) !== 'number' || seat 
  >= 36 || seat < 0 || !Number.isInteger(seat)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }
  if (seat === 0 || seat > 36) {
    return "Таких мест в вагоне не существует";
  }

  return Math.ceil(seat / 4); 

  }*/

  /*function getTimeFromMinutes(min) {
    if (typeof (min) !== 'number' || min < 0 || !Number.isInteger(min)) {
    return "Ошибка, проверьте данные";
    }

    let hours = Math.floor(min/60);
    let minutes = min % 60;

    let hoursStr = '';

    switch (hours) {
      case 0:
        hoursStr = 'часов';
        break;
      
      case 1:
        hoursStr = 'час';
        break;

      case 2:
      case 3:
      case 4:
        hoursStr = 'часа';
        break;
      default:
        hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
  }*/

  /*function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
      return 0;
    } else {
      return Math.max(a, b, c, d);
    }
  }*/

  function fib(num) {

    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
      return "";
    }

      let result = '';
      let a = 0;
      let b = 1;

    for(let i = 0; i < num; i++) {
        if (i + 1 === num) {
          result += `${a}`;
        } else {
          result += `${a} `;
        }

        let c = a + b;
        a = b;
        b = c;
    }

    return result;
    
  }