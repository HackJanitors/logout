export function getHoursAndMinutesFromMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);

    return [hours, mins];
}

export function getMinutesFromHours(hours) {
    return hours * 60;
}

export function formatTimeString(hours, minutes) {
    if (hours > 1 && minutes > 0) {
        return hours + " hours and " + minutes + " minutes";
    } else if (hours === 1 && minutes > 0) {
        return hours + " hour and " + minutes + " minutes";
    } else if (hours > 0) {
        return hours + " hours";
    } else if (minutes > 0) {
        return minutes + " minutes";
    } else {
        return "0 minutes";
    }
}

export function getHoursAndMinutesFromHours(hours) {
    const mins = hours % 1 * 60;
    const hrs = Math.floor(hours);
    return [hrs, mins] 
}