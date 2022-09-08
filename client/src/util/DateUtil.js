const convertToStandardDate = isoDate => {
    return new Date(isoDate).toLocaleDateString('en-US')
}

const formatter = new Intl.RelativeTimeFormat('en')
const convertToRelativeTimeBasic = isoDate => {
    const timeDifference = (new Date() - new Date(isoDate)) / 1000;
    if (timeDifference < 60) {
        return formatter.format(-timeDifference, 'seconds')
    }
    if (timeDifference < 3600) {
        let roundedMinutes = Math.floor((-timeDifference) / 60)
        return formatter.format(roundedMinutes, 'minutes')
    }
    if (timeDifference <= 86400) {
        let roundedHours = Math.floor((-timeDifference) / 3600)
        return formatter.format(roundedHours, 'hours')
    }
    if (timeDifference <= 2620800) {
        let roundedDays = Math.floor((-timeDifference) / 86400)
        return formatter.format(roundedDays, 'days')
    }
    if (timeDifference <= 31449600) {
        let roundedMonths = Math.floor((-timeDifference) / 2620800)
        return formatter.format(roundedMonths, 'months')
    }
    let roundedYears = Math.floor((-timeDifference) / 31449600)
    return formatter.format(roundedYears, 'years')
}



export {
    convertToStandardDate,
    convertToRelativeTimeBasic
}