export function formatDateTimeWithAMPM(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  return new Date(dateString).toLocaleString('en-US', options);
}



export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  return date.toLocaleDateString('en-US', options).toUpperCase().replace(',', '');
}