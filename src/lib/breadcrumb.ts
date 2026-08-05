import {NavbarDataType} from "@/types";

export function findBreadCrumbs(
    menus:NavbarDataType,
    pathname: string,
    parents?:NavbarDataType
): NavbarDataType | null
{
    for (const menu of menus)
    {
        if(`${menu?.route}` === pathname)
        {
            return [...(parents ?? []), menu];
        }

        if(menu?.children?.length)
        {
            const found = findBreadCrumbs(menu?.children, pathname, [...(parents ?? []), menu])
            if(found) return found;
        }
    }

    return null;
}