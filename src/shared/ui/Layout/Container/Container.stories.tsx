/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { CSSProperties } from "react";

export default {
    title: "UI/Layout/Container",
    component: Container,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Container>;

const styles: CSSProperties = {
    height: " 500px",
    color: "#FFFFFF",
    font: "var(--font-headline-1)",
    width: "100%",
    backgroundColor: "var(--color-success)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export const Template: ComponentStory<typeof Container> = () => (
    <Container>
        <div style={styles}>Content</div>
    </Container>
);
