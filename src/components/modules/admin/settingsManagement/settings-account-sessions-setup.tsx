"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Separator, TabsContent, Badge, Button,
} from "@/components/ui";
import {Laptop, Smartphone, LogOut, ShieldAlert, Monitor} from "lucide-react";
import React from "react";

type SessionDevice = "laptop" | "mobile";

interface Session {
    id: string;
    device: string;
    deviceType: SessionDevice;
    isCurrent: boolean;
    activeAgo: string;
    network: string;
    expires: string;
    twoFactorVerified: boolean;
}

const sessions: Session[] = [
    {
        id: "1",
        device: "Chrome on Windows",
        deviceType: "laptop",
        isCurrent: true,
        activeAgo: "Active 5 days ago",
        network: "123.253.146.x",
        expires: "Aug 30, 2026",
        twoFactorVerified: false,
    },
    {
        id: "2",
        device: "Chrome on macOS",
        deviceType: "laptop",
        isCurrent: false,
        activeAgo: "Active about 1 hour ago",
        network: "103.179.128.x",
        expires: "Sep 5, 2026",
        twoFactorVerified: false,
    },
    {
        id: "3",
        device: "Safari on macOS",
        deviceType: "laptop",
        isCurrent: false,
        activeAgo: "Active about 1 hour ago",
        network: "103.179.128.x",
        expires: "Sep 5, 2026",
        twoFactorVerified: false,
    },
    {
        id: "4",
        device: "Chrome on Android",
        deviceType: "mobile",
        isCurrent: false,
        activeAgo: "Active about 13 hours ago",
        network: "37.111.210.x",
        expires: "Sep 4, 2026",
        twoFactorVerified: false,
    },
];

export function SettingsAccountSessionsSetup({ activeTab } : { activeTab: string})
{
    return (
        <>
            <TabsContent value={activeTab}>
                <Card>
                    <CardHeader className={'flex flex-row items-start justify-between'}>
                        <div className="space-y-1.5">
                            <CardTitle className={'text-lg font-medium!'}>
                                <p className={'flex items-center gap-2'}>
                                    <Monitor size={18} />
                                    Active sessions
                                    <Badge variant={'secondary'}>{sessions.length}</Badge>
                                </p>
                            </CardTitle>
                            <CardDescription>
                                Review where this account is signed in and remove devices you no longer recognize.
                            </CardDescription>
                        </div>

                        <Button variant={'outline'}>
                            <LogOut />
                            Sign out other devices
                        </Button>
                    </CardHeader>
                    <Separator />
                    <CardContent className="mt-2 flex flex-col text-sm text-muted-foreground">
                        {sessions.map((session, index) => (
                            <React.Fragment key={session.id}>
                                <div className="flex items-center justify-between gap-4 py-4">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-md border">
                                            {session.deviceType === "mobile" ? (
                                                <Smartphone size={16} />
                                            ) : (
                                                <Laptop size={16} />
                                            )}
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium text-foreground">{session.device}</span>
                                                {session.isCurrent && (
                                                    <Badge variant={'secondary'}>Current</Badge>
                                                )}
                                            </div>
                                            <p className="text-sm">
                                                {session.activeAgo} · Network {session.network} · Expires {session.expires}
                                            </p>
                                            {!session.twoFactorVerified && (
                                                <p className="flex items-center gap-1 text-sm text-yellow-600 dark:text-yellow-500">
                                                    <ShieldAlert size={14} />
                                                    Two-factor not verified for this session
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {session.isCurrent ? (
                                        <span className="flex items-center gap-1 text-sm">
                                            <ShieldAlert size={14} />
                                            Protected
                                        </span>
                                    ) : (
                                        <Button variant={'outline'}>
                                            <LogOut />
                                            Sign out
                                        </Button>
                                    )}
                                </div>
                                {index < sessions.length - 1 && <Separator />}
                            </React.Fragment>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
        </>
    )
}