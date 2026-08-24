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

export function SettingsAccountTwoFactorSetup({ activeTab } : { activeTab: string})
{
    return (
        <>
            <TabsContent value={activeTab}>
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
        </>
    )
}