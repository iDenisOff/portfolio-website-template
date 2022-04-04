export const styler = (...styles: (string | [boolean, string])[]): string => {
    return styles
        .map((s) => {
            if (Array.isArray(s)) {
                return s[0] ? s[1] : null;
            }
            return s;
        })
        .filter((s) => s !== null)
        .join(" ");
};
