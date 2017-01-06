const normalizeEventsData = (events) => {
  let eventsArray = events.events;
  let resultArray = [];
  for (let key in eventsArray) {
    resultArray.push(eventsArray[key]);
  }
  return resultArray;
};

const filterEventsByCity = (events, selectedCity) => {
  const filterEventsByCityResult = events.filter(event => {
    return event.eventCity === selectedCity ? true : null;
  });
  return filterEventsByCityResult;
};

const filterEventsByTheme = (events, selectedTheme) => {
  const filterEventsByThemeResult = events.filter(event => {
    return event.eventTheme === selectedTheme ? true : null;
  });
  return filterEventsByThemeResult;
};

const filterEventsByTime = (events, selectedTime) => {
  const filterEventsByTimeResult = events.filter(event => {
    return event.eventTime === selectedTime ? true : null;
  });
  return filterEventsByTimeResult;
};

const dropdownTimeOptions = (events) => {
  const dropdownTimeOptionsResult = [];
  events.forEach((element) => {
    dropdownTimeOptionsResult.includes(element.eventTime) ? null : dropdownTimeOptionsResult.push(element.eventTime);
  });
  return dropdownTimeOptionsResult;
};


const mergeEvents = (arr1, arr2, isEqual) => {
  function isStrictEqual(a, b) {
    return a === b;
  }
  if (isEqual === void 0) { isEqual = isStrictEqual; }
  return arr1.filter(function (x) { return arr2.some(function (y) { return isEqual(x, y); }); });
};

export { normalizeEventsData, filterEventsByCity, filterEventsByTheme, dropdownTimeOptions, filterEventsByTime, mergeEvents};
