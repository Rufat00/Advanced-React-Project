/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "./Link";

export default {
    title: "UI/Link",
    component: Link,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Link>;

export const Template: ComponentStory<typeof Link> = (args) => (
    <Link to={"/"} {...args}>
        Cool Link😎
    </Link>
);
