/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Chip } from "./Chip";

export default {
    title: "UI/DataDisplay/Chip",
    component: Chip,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Chip>;

export const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args}>Cool Chip🏆</Chip>;
