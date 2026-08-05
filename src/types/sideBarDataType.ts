import * as LucideIcons from "lucide-react";
import {Url} from "node:url";

export type NavbarDataType = {
  id: number
  title: string
  route: Url
  icon?: keyof typeof LucideIcons;
  children?: {
    id: number
    title: string
    route: Url
    icon?: keyof typeof LucideIcons;
    parent_id: number
  }[]
}[]