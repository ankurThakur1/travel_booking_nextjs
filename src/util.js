export function formatTime(dateString) {
  const date = new Date(dateString);
  
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const dateFor = `${date.toLocaleDateString("en-GB", {
    month: "short",
  })}-${date.getDay()}-${date.getFullYear()}`;
  return dateFor; 
//   return date.toLocaleDateString('en-GB', {
//     month: 'short',
//     day: '2-digit',
//     year: 'numeric',
//   });
}

export function parseDuration(isoString) {
  const matches = isoString.match(/PT(\d+H)?(\d+M)?/);
  const hours = matches[1] ? matches[1].replace('H', '') : '0';
  const minutes = matches[2] ? matches[2].replace('M', '') : '0';
  return `${hours}h ${minutes}m`;
}


