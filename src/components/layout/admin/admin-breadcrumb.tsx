"use client"
import React, {useEffect} from 'react';
import {usePathname} from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui";
import { NavbarDataType } from "@/types";
import {findBreadCrumbs} from "@/lib/breadcrumb";
import Link from "next/link";

function AdminBreadcrumb()
{
    const [menus, setMenus] = React.useState<NavbarDataType>([]);

    React.useEffect(() => {
        const data = localStorage.getItem("menus");
        if(data) {
            setMenus(JSON.parse(data))
        }
    }, []);

    const pathname: string = usePathname();

    const breadcrumbs: NavbarDataType = findBreadCrumbs(menus, pathname) ?? [];

    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink asChild>
                            <Link href={"/admin/dashboard"}>
                                Admin
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    { breadcrumbs?.map((item, index) => {
                        const isLast = index === breadcrumbs?.length -1;
                        const isFirst = index === 0;
                        return (
                            <div
                                key={index}
                                className={'flex items-center gap-2'}
                            >
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    {isLast || isFirst ? (
                                        <BreadcrumbPage>
                                            {item.title}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link href={item.route}>
                                                {item.title}
                                            </Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </div>
                        )
                    }) }
                </BreadcrumbList>
            </Breadcrumb>
        </>
    );
}

export default AdminBreadcrumb;