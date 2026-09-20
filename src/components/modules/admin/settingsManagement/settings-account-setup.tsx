"use client"

import React, {useEffect} from 'react';
import {
    Tabs, TabsList, TabsTrigger, Separator
} from "@/components/ui"
import {
    KeyRound,
    LucideIcon,
    MonitorSmartphone,
    Shield,
    User,
    UserKey,
    Users
} from "lucide-react";
import {
    SettingsAccountProfileSetup,
    SettingsAccountTwoFactorSetup,
    SettingsAccountPasswordSetup,
    SettingsAccountSessionsSetup,
    SettingsAccountAdministratorsSetup,
    SettingsAccountRolesSetup
} from "@/components/modules/admin";
import {usePathname, useRouter} from "next/navigation";

type TabsTriggerTypes = {
    icon: LucideIcon
    title: string
    value: string
}

type TabsTypes = {
    type: string
    tabs: TabsTriggerTypes[]
}

type SettingsAccountSetupProps = {
    section: string;
    permissions: any[];
}

const tabs: TabsTypes[] = [
    {
        type: "Personal",
        tabs: [
            {icon: User, title: "Profile", value: "profile"},
            {icon: Shield, title: "Two Factor", value: "two-factor"},
            {icon: KeyRound, title: "Password", value: "password"},
            {icon: MonitorSmartphone, title: "Sessions", value: "sessions"},
        ]
    },
    {
        type: "Store Access",
        tabs: [
            {icon: Users, title: "Administrators", value: "administrators"},
            {icon: UserKey, title: "Roles", value: "roles"},
        ]
    }
]

export function SettingsAccountSetup({ section, permissions }: SettingsAccountSetupProps) {

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if(section === 'roles') {
            console.log(permissions)
        }
    }, [permissions]);

    const handleTabChange = (value: string) => {
        router.replace(`${pathname}?section=${value}`);
    };

    return (
        <>
            <h1 className={'text-xl text-foreground font-medium'}>
                Account
            </h1>

            <Tabs
                value={section}
                onValueChange={handleTabChange}
                orientation="vertical"
                className={'mt-4'}
            >
                <TabsList className={'px-2 min-w-50 bg-sidebar space-y-1'}>
                    {tabs.map((tab: TabsTypes, index: number) => (
                        <React.Fragment key={index}>

                            {index !== 0 && (
                                <Separator className="mt-2"/>
                            )}

                            <p className={'text-xs uppercase w-full py-2'}>
                                {tab.type}
                            </p>

                            {tab.tabs.map((tabTrigger: TabsTriggerTypes, index: number) => {
                                const Icon = tabTrigger.icon;

                                return (
                                    <TabsTrigger
                                        key={index}
                                        value={tabTrigger.value}
                                        className={'py-1.5 px-2'}
                                    >
                                        {Icon && <Icon className="size-4"/>}
                                        {tabTrigger.title}
                                    </TabsTrigger>
                                )
                            })}

                        </React.Fragment>
                    ))}
                </TabsList>

                <SettingsAccountProfileSetup
                    activeTab="profile"
                />
                <SettingsAccountTwoFactorSetup
                    activeTab="two-factor"
                />
                <SettingsAccountPasswordSetup
                    activeTab="password"
                />
                <SettingsAccountSessionsSetup
                    activeTab="sessions"
                />
                <SettingsAccountAdministratorsSetup
                    activeTab="administrators"
                />
                <SettingsAccountRolesSetup
                    activeTab="roles"
                />
            </Tabs>
        </>
    );
}