const formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
}

const formatDateFull = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        weekday: 'short'
    };
    return date.toLocaleDateString('ru-RU', options).replace(',', '')
}

export {
    formatTime,
    formatDateFull
}

