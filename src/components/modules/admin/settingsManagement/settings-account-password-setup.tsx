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

export function SettingsAccountPasswordSetup({ activeTab } : { activeTab: string})
{
    return (
        <>
            <TabsContent value={activeTab}>
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
        </>
    )
}