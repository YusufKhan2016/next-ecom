import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {Separator} from "@/components/ui";
import {KeyRound, LucideIcon, MonitorSmartphone, Shield, User, UserKey, Users} from "lucide-react";

type TabsTriggerTypes = {
    icon: LucideIcon
    title: string
    value: string
}

type TabsTypes = {
    type:string
    tabs: TabsTriggerTypes[]
}

function AccountPage() {
    const tabs:TabsTypes[] = [
        {
            type: "Personal",
            tabs: [
                { icon: User,title: "Profile", value: "profile" },
                { icon: Shield,title: "Two Factor", value: "two-factor" },
                { icon: KeyRound, title: "Password", value: "password" },
                { icon: MonitorSmartphone, title: "Sessions", value: "sessions" },
            ]
        },
        {
            type: "Store Access",
            tabs: [
                { icon: Users, title: "Administrators", value: "administrators" },
                { icon: UserKey, title: "Roles", value: "roles" },
            ]
        }
    ]

    return (
        <>
            <h1 className={'text-xl text-foreground font-medium'}>Account</h1>

            <Tabs
                defaultValue="profile"
                orientation="vertical"
                className={'mt-4'}
            >
                <TabsList className={'px-2 min-w-50 bg-sidebar space-y-1'}>
                    {tabs.map((tab:TabsTypes, index:number)=>(
                        <React.Fragment key={index}>
                            { index !== 0 && (
                                <Separator
                                    className="mt-2"
                                />
                            )}
                            <p className={'text-xs uppercase w-full py-2'}>{ tab.type }</p>

                            {tab.tabs.map((tabTrigger:TabsTriggerTypes, index:number) =>{
                                const Icon = tabTrigger.icon;
                                return (
                                    <TabsTrigger
                                        key={index}
                                        value={tabTrigger.value}
                                        className={'py-1.5 px-2'}
                                    >
                                        {Icon && <Icon className="size-4" />}
                                        {tabTrigger.title}
                                    </TabsTrigger>
                                )
                            })}
                        </React.Fragment>
                    ))}
                </TabsList>

                <TabsContent value="profile">
                    <Card>
                        <CardHeader>
                            <CardTitle className={'text-lg font-medium!'}>
                                <p className={'text-lg flex items-center gap-2'}>
                                    <User size={18} />
                                    Profile
                                </p>
                            </CardTitle>
                            <CardDescription>
                                Edit your basic infos from here.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            You have 12 active projects and 3 pending tasks.
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="two-factor">
                    <Card>
                        <CardHeader>
                            <CardTitle>Analytics</CardTitle>
                            <CardDescription>
                                Track performance and user engagement metrics. Monitor trends and
                                identify growth opportunities.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            Page views are up 25% compared to last month.
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Reports</CardTitle>
                            <CardDescription>
                                Generate and download your detailed reports. Export data in
                                multiple formats for analysis.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            You have 5 reports ready and available to export.
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="sessions">
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                            <CardDescription>
                                Manage your account preferences and options. Customize your
                                experience to fit your needs.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            Configure notifications, security, and themes.
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </>
    );
}

export default AccountPage;

