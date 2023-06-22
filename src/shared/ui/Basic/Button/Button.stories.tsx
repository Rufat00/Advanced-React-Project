/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonVariants } from "./Button";
import SunIcon from "@/shared/assets/icons/sun.svg";
import MoonIcon from "@/shared/assets/icons/moon.svg";

export default {
    title: "UI/Basic/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
    children: "Cool Button",
    variant: ButtonVariants.CONTAINED,
    ripple: true,
    iconLeft: <SunIcon />,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: "Cool Button",
    variant: ButtonVariants.OUTLINED,
    ripple: true,
    iconRight: <MoonIcon />,
};
