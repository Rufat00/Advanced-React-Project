/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar, AvatarSizes } from "./Avatar";
import { CSSProperties } from "react";
import img from "./Avatar.png";

export default {
    title: "UI/DataDisplay/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Avatar>;

const styles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
};

export const Template: ComponentStory<typeof Avatar> = () => (
    <div style={styles}>
        <Avatar alt="size:xs" src={img} size={AvatarSizes.XS} />
        <Avatar alt="size:sm" src={img} size={AvatarSizes.SM} />
        <Avatar alt="size:md" src={img} size={AvatarSizes.MD} />
        <Avatar alt="size:lg" src={img} size={AvatarSizes.LG} />
        <Avatar alt="size:xlg" src={img} size={AvatarSizes.XLG} />
    </div>
);
