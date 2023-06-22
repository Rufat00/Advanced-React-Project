/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LanguageSwitcher } from "./LanguageSwitcher";

export default {
    title: "Widgets/LanguageSwitcher",
    component: LanguageSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => <LanguageSwitcher {...args} />;

export const Contained = Template.bind({});
