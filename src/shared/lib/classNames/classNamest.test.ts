import { classNames } from "./classNames";

describe("classNames", () => {
    test("with one parametr", () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("with multiple parametrs", () => {
        expect(classNames("firstClass", "secondClass")).toBe(
            "firstClass secondClass"
        );
    });

    test("with changeable parametr", () => {
        expect(
            classNames("someClass", { changeable: true }, "secondClass")
        ).toBe("someClass changeable secondClass");
    });

    test("with disabled changeable parametr", () => {
        expect(
            classNames(
                "someClass",
                { disabledChangeable: false },
                "secondClass",
                { changeable: true }
            )
        ).toBe("someClass secondClass changeable");
    });

    test("with unvalid parametrs", () => {
        expect(
            classNames("someClass", { changeable: true }, "secondClass", {
                unvalidChangeable: undefined,
            })
        ).toBe("someClass changeable secondClass");
    });
});
