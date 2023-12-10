const convertToHoursAndMinutes = (runtimeInMinutes) => {
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;

  const formattedRuntime = `${hours}h ${minutes}m`;

  return formattedRuntime;
};

export default convertToHoursAndMinutes;
