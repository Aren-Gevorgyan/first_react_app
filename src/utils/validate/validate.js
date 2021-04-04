export const notNull = value => {

    if (!value) {
        return "should not be null";
    } else {
        return undefined;
    }
}

export const getMaxTextSize = (size) => {

    return (value) => {
        if (value.length > size) {
            return `should not be more than ${size} characters`;
        } else {
            return undefined;
        }

    }
}