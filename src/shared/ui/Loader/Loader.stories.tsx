import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loader } from "./Loader";

export default {
    title: "shared/Loader",
    component: Loader,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
