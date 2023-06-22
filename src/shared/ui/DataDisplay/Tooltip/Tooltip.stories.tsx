/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Chip, ChipTypes } from "../Chip/Chip";

export default {
    title: "UI/DataDisplay/Tooltip",
    component: Tooltip,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Tooltip>;

export const Template: ComponentStory<typeof Tooltip> = (args) => (
    <Tooltip {...args} content="hello my name is balls">
        <Chip type={ChipTypes.COLORED_SECONDARY}>Tooltips Are Cool</Chip>
    </Tooltip>
);
