"use client";

import React from "react";
import {
    TabsContent,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Button,
    Badge,
    Separator, TooltipTrigger, CollapsibleTrigger, TooltipContent, Tooltip,
} from "@/components/ui";

import {
    Shield,
    Plus,
    Pencil,
    Lock, ShieldCheck,
} from "lucide-react";
import {SettingsAccountRolesSetupForm} from "@/components/modules/admin";

const roles = [
    {
        name: "Content Editor",
        description: "Access to pages, widgets, media, and content settings.",
        permissions: 16,
        system: true,
    },
    {
        name: "Product Specialist",
        description:
            "Full access to products, categories, collections, and attributes.",
        permissions: 24,
        system: true,
    },
    {
        name: "Sales Representative",
        description:
            "Access to orders, customers, and product viewing.",
        permissions: 16,
        system: true,
    },
];

export function SettingsAccountRolesSetup({ activeTab }:{ activeTab: string }) {
    const [roleDialogOpen, setRoleDialogOpen] = React.useState(false);

    const handleCreateRole = () => {
        setRoleDialogOpen(true);
    };
    const handleEditRole = (role: string) => {
        setRoleDialogOpen(true);
        console.log("Edit role:", role);
    };

    return (
        <>
            <SettingsAccountRolesSetupForm
                open={roleDialogOpen}
                onOpenChange={setRoleDialogOpen}
            />

            <TabsContent value={activeTab}>
                <Card>
                    <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Shield size={18} />
                                    Roles Management
                                </CardTitle>

                                <CardDescription>
                                    Create and manage roles with specific permissions
                                </CardDescription>
                            </div>

                            <Button onClick={handleCreateRole}>
                                <Plus />
                                Create Role
                            </Button>
                        </div>
                    </CardHeader>

                    <Separator />

                    <CardContent className="space-y-4 pt-6">
                        {roles.map((role) => (
                            <Card key={role.name}>
                                <CardContent className="flex justify-between py-3! gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold">
                                                {role.name}
                                            </h3>

                                            {role.system && (
                                                <Badge variant="secondary">
                                                    <Lock />
                                                    System
                                                </Badge>
                                            )}
                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            {role.description}
                                        </p>

                                        <p className="text-sm text-muted-foreground">
                                            {role.permissions} permissions
                                        </p>
                                    </div>

                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() =>
                                                    handleEditRole(role.name)
                                                }
                                                aria-label={`Edit ${role.name}`}
                                            >
                                                <Pencil />
                                            </Button>
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            <p>Edit Role</p>
                                        </TooltipContent>
                                    </Tooltip>

                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
        </>
    );
}