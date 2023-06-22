/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Logo } from "./Logo";

export default {
    title: "UI/DataDisplay/Logo",
    component: Logo,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Logo>;

export const Template: ComponentStory<typeof Logo> = (args) => (
    <Logo {...args} style={{ height: "70px" }} />
);
