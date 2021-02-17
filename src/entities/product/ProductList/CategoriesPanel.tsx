import React, { FC } from "react";
import { List, ListItem, ListSubheader } from "@react-md/list";
import {
  ViewListSVGIcon,
  LaptopSVGIcon,
  BuildSVGIcon,
  FolderSVGIcon,
} from "@react-md/material-icons";
import { Avatar, AvatarProps } from "@react-md/avatar";
import { Divider } from "@react-md/divider";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH_LIST } from "application/constants";

interface CustomIconProps extends AvatarProps {
  Icon: any;
}
const CustomIcon: FC<CustomIconProps> = ({ Icon, ...props }) => (
  <Avatar {...props}>
    <Icon />
  </Avatar>
);

const CategoriesPanel: FC = () => {
  const history = useHistory();

  return (
    <List>
      <ListSubheader>Categories</ListSubheader>
      <ListItem
        id="two-line-item-0"
        leftAddon={<CustomIcon color="blue" Icon={ViewListSVGIcon} />}
        leftAddonType="avatar"
        onClick={() => {
          history.push(`${ROUTER_PATH_LIST.product}`);
        }}
      >
        All
      </ListItem>
      <Divider />
      <ListItem
        id="two-line-item-1"
        leftAddon={<CustomIcon color="blue" Icon={LaptopSVGIcon} />}
        leftAddonType="avatar"
        onClick={() => {
          history.push(`${ROUTER_PATH_LIST.product}/tech`);
        }}
      >
        Tech
      </ListItem>
      <ListItem
        id="two-line-item-2"
        leftAddon={<CustomIcon color="blue" Icon={BuildSVGIcon} />}
        leftAddonType="avatar"
        onClick={() => {
          history.push(`${ROUTER_PATH_LIST.product}/services`);
        }}
      >
        Services
      </ListItem>
      <ListItem
        id="two-line-item-3"
        leftAddon={<CustomIcon color="blue" Icon={FolderSVGIcon} />}
        leftAddonType="avatar"
        onClick={() => {
          history.push(`${ROUTER_PATH_LIST.product}/office`);
        }}
      >
        Office
      </ListItem>
    </List>
  );
};

export default CategoriesPanel;
