import {
    Avatar, AvatarFallback,
    AvatarImage,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Separator, TabsContent
} from "@/components/ui";
import {User} from "lucide-react";
import React from "react";

export function SettingsAccountSessionsSetup({ activeTab } : { activeTab: string})
{
    return (
        <>
            <TabsContent value={activeTab}>
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
        </>
    )
}