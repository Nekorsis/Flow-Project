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

const dropdownCityOptions = (events) => {
  const dropdownCityOptionsResult = [];
  events.forEach((element) => {
    dropdownCityOptionsResult.includes(element.eventCity) ? null : dropdownCityOptionsResult.push(element.eventCity);
  });
  return dropdownCityOptionsResult;
};

export { normalizeEventsData, filterEventsByCity, filterEventsByTheme, dropdownCityOptions };
