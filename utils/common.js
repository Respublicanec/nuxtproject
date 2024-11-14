export function formatDate(date) {
  const dataNote = new Date(date);
  const day = dataNote.getUTCDate();
  const month = dataNote.getUTCMonth() + 1;
  const year = dataNote.getUTCFullYear();
  const hours = dataNote.getUTCHours();
  const minutes = dataNote.getUTCMinutes();
  const seconds = dataNote.getUTCSeconds();

  return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
}

export function formatDateMilliseconds(date) {
  const dataNote = new Date(date);
  const day = dataNote.getUTCDate();
  const month = dataNote.getUTCMonth() + 1;
  const year = dataNote.getUTCFullYear();
  const hours = dataNote.getUTCHours();
  const minutes = dataNote.getUTCMinutes();
  const seconds = dataNote.getUTCSeconds();
  const milliseconds = dataNote.getUTCMilliseconds();

  return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
}
