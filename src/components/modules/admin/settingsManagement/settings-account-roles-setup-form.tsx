"use client";

import React from "react";
import {
    Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,
    Button,Input,Label,Textarea,Separator,
    Collapsible,CollapsibleContent,CollapsibleTrigger,Checkbox,
} from "@/components/ui";

import { ChevronDown, Save } from "lucide-react";

type Permission = {
    id: number;
    name: string;
    action: string;
};

type PermissionGroup = {
    name: string;
    permissions: Permission[];
};

type SettingsAccountRolesSetupFormProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const permissionGroups: PermissionGroup[] = [
    {
        name: "Dashboard",
        permissions: [
            {
                id: 1,
                name: "dashboard.view",
                action: "View",
            },
        ],
    },
    {
        name: "Users",
        permissions: [
            {
                id: 2,
                name: "user.view",
                action: "View",
            },
            {
                id: 3,
                name: "user.create",
                action: "Create",
            },
            {
                id: 4,
                name: "user.edit",
                action: "Edit",
            },
        ],
    },
    {
        name: "Products",
        permissions: [
            {
                id: 5,
                name: "product.view",
                action: "View",
            },
            {
                id: 6,
                name: "product.create",
                action: "Create",
            },
            {
                id: 7,
                name: "product.edit",
                action: "Edit",
            },
            {
                id: 8,
                name: "product.delete",
                action: "Delete",
            },
        ],
    },
    {
        name: "Categories",
        permissions: [
            {
                id: 9,
                name: "category.view",
                action: "View",
            },
            {
                id: 10,
                name: "category.create",
                action: "Create",
            },
            {
                id: 11,
                name: "category.edit",
                action: "Edit",
            },
            {
                id: 12,
                name: "category.delete",
                action: "Delete",
            },
        ],
    },
    {
        name: "Orders",
        permissions: [
            {
                id: 13,
                name: "order.view",
                action: "View",
            },
            {
                id: 14,
                name: "order.create",
                action: "Create",
            },
            {
                id: 15,
                name: "order.edit",
                action: "Edit",
            },
        ],
    },
];

export function SettingsAccountRolesSetupForm({ open, onOpenChange}: SettingsAccountRolesSetupFormProps) {
    const [selectedPermissions, setSelectedPermissions] = React.useState<number[]>([]);

    const handlePermissionChange = (permissionId: number, checked: boolean) => {
        setSelectedPermissions((current) => {
            if (checked) {
                return [...current, permissionId];
            }

            return current.filter((id) => id !== permissionId);
        });
    };

    const handleSaveRole = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const roleData = {
            name: formData.get("role_name"),
            description: formData.get("description"),
            permissions: selectedPermissions,
        };

        console.log("Role data:", roleData);

        // API call will go here later.
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <form onSubmit={handleSaveRole}>
                    <DialogHeader>
                        <DialogTitle>Create Role</DialogTitle>

                        <DialogDescription>
                            Create a new role with custom permissions
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 py-6">
                        <div className="space-y-2">
                            <Label htmlFor="role_name">
                                Role Name
                            </Label>

                            <Input
                                id="role_name"
                                name="role_name"
                                placeholder="e.g. Content Editor"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">
                                Description
                            </Label>

                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Describe what this role is responsible for..."
                                rows={3}
                            />
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium">
                                    Permissions
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    Select the permissions this role should
                                    have.
                                </p>
                            </div>

                            <div className="space-y-2">
                                {permissionGroups.map((group) => {
                                    const selectedCount =
                                        group.permissions.filter((permission) =>
                                            selectedPermissions.includes(
                                                permission.id
                                            )
                                        ).length;

                                    return (
                                        <Collapsible
                                            key={group.name}
                                            className="rounded-md border"
                                        >
                                            <CollapsibleTrigger asChild>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    className="w-full justify-between rounded-md px-4 py-3 hover:no-underline"
                                                >
                                                    <span className="flex items-center gap-3">
                                                        <span className="font-medium">
                                                            {group.name}
                                                        </span>

                                                        <span className="text-xs text-muted-foreground">
                                                            {selectedCount}/
                                                            {
                                                                group
                                                                    .permissions
                                                                    .length
                                                            }
                                                        </span>
                                                    </span>

                                                    <ChevronDown className="size-4 transition-transform" />
                                                </Button>
                                            </CollapsibleTrigger>

                                            <CollapsibleContent>
                                                <div className="border-t px-4 py-3">
                                                    <div className="grid gap-3">
                                                        {group.permissions.map(
                                                            (
                                                                permission
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        permission.id
                                                                    }
                                                                    className="flex items-center gap-3"
                                                                >
                                                                    <Checkbox
                                                                        id={`permission-${permission.id}`}
                                                                        checked={selectedPermissions.includes(
                                                                            permission.id
                                                                        )}
                                                                        onCheckedChange={(checked) =>
                                                                            handlePermissionChange(
                                                                                permission.id,
                                                                                checked ===
                                                                                true
                                                                            )
                                                                        }
                                                                    />

                                                                    <Label
                                                                        htmlFor={`permission-${permission.id}`}
                                                                        className="cursor-pointer font-normal"
                                                                    >
                                                                        {
                                                                            permission.action
                                                                        }
                                                                    </Label>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>

                        <Button type="submit">
                            <Save />
                            Create Role
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}