function calcAge(birthday) {
    if (birthday === null) {
        return null;
    }
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const PEOPLE_FLASHCARD_KEYS = {
    GENDER: "Gender",
    AGE: "Age",
    BIRTHDAY: "Birthday",
    COUNTRY: "Born in",
};

export const PEOPLE_FLASHCARD_KEYS_MAP = [
    {
        label: PEOPLE_FLASHCARD_KEYS.GENDER,
        contentReader: (data) => data?.gender,
    },
    {
        label: PEOPLE_FLASHCARD_KEYS.AGE,
        contentReader: (data) => calcAge(data?.birthday),
    },
    {
        label: PEOPLE_FLASHCARD_KEYS.BIRTHDAY,
        contentReader: (data) => data?.birthday || "Unknown",
    },
    {
        label: PEOPLE_FLASHCARD_KEYS.COUNTRY,
        contentReader: (data) => data?.country?.name || "Unknown",
    },
];
