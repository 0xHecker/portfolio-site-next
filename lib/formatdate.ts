export const formatDate = (date: string) =>
  new Date(date).toLocaleString('en-UK', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
