export const getDayOfWeek = (dateString: string) => {
    const date = new Date(dateString);
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return daysOfWeek[date.getUTCDay()];
};
