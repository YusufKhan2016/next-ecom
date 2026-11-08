"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
    TabsContent,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Button,
    Badge,
    Separator, TooltipTrigger, TooltipContent, Tooltip,
} from "@/components/ui";

import {
    Shield,
    Plus,
    Pencil,
    Lock,
} from "lucide-react";
import { getRolesListAction } from "@/actions";
import {SettingsAccountRolesSetupForm} from "@/components/modules/admin";

type Role = {
    id: number;
    name: string;
    description: string | null;
    permissions: { id: number; name: string }[];
};

export function SettingsAccountRolesSetup({ activeTab }:{ activeTab: string }) {
    const [roleDialogOpen, setRoleDialogOpen] = React.useState(false);
    const [roles, setRoles] = useState<Role[]>([]);
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);

    const fetchRoles = useCallback(async () => {
        const response = await getRolesListAction();
        console.log(response);
        setRoles(response?.data ?? []);
    }, []);

    useEffect(() => {
        if(roles.length === 0 ) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            void fetchRoles();
        }
    }, [fetchRoles, roles]);

    const handleCreateRole = () => {
        setSelectedRole(null);
        setRoleDialogOpen(true);
    };

    const handleEditRole = (role: Role) => {
        setSelectedRole(role);
        setRoleDialogOpen(true);
    };

    return (
        <>
            <SettingsAccountRolesSetupForm
                open={roleDialogOpen}
                onOpenChange={setRoleDialogOpen}
                role={selectedRole}
                onSaved={fetchRoles}
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

                                            {role.id === 1 && (
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
                                            {role.permissions.length} permissions
                                        </p>
                                    </div>

                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleEditRole(role)}
                                                disabled={role.id === 1}
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