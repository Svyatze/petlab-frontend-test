export const getPlaceholderImage = (title) => {
    const colors = [
        '#7BC47F',
        '#6366F1',
        '#F59E0B',
        '#EF4444',
        '#8B5CF6',
        '#EC4899',
    ];

    const firstChar = title ? title.charAt(0).toUpperCase() : 'P';
    const colorIndex = firstChar.charCodeAt(0) % colors.length;
    const backgroundColor = colors[colorIndex];

    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3E%3Crect width='100' height='100' fill='${backgroundColor.replace('#', '%23')}'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='35' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${firstChar}%3C/text%3E%3C/svg%3E`;
};