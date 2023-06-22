/* eslint-disable prefer-rest-params */
type Changeable = Record<string, boolean>;

export function classNames(..._parametrs: Array<string | Changeable>): string {
    const classNames: string[] = [];

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "string") {
            classNames.push(arguments[i]);
        }
        if (typeof arguments[i] === "object") {
            classNames.push(
                ...Object.entries(arguments[i])
                    .filter(([, value]) => Boolean(value))
                    .map(([className]) => className)
            );
        }
    }

    return classNames.join(" ");
}
