import { render, screen } from "@testing-library/react";
import { Button, ButtonVariants } from "@/shared/ui/Button/Button";

describe("Button", () => {
    test("Test render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("Test clear theme", () => {
        render(<Button variant={ButtonVariants.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
        screen.debug();
    });
});
