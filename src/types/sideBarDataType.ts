import * as LucideIcons from "lucide-react";

export type navbarDataType = {
  id: number
  title: string
  route: string
  icon: keyof typeof LucideIcons;
  children?: {
    id: number
    title: string
    route: string
    icon: keyof typeof LucideIcons;
    parent_id: number
  }[]
}[] 