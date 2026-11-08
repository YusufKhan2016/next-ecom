"use client";

import React, {useEffect} from "react";
import {
    Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,
    Button,Input,Label,Textarea,Separator,
    Collapsible,CollapsibleContent,CollapsibleTrigger,Checkbox,
} from "@/components/ui";

import { ChevronDown, Save } from "lucide-react";

import {getPermissionsListAction, saveUpdateRoleAction} from "@/actions";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from "zod";
import {toast} from "sonner";

type Permission = {
    id: number;
    name: string;
    action: string;
};

type PermissionGroup = {
    name: string;
    permissions: Permission[];
};

type Role = {
    id: number;
    name: string;
    description: string | null;
    permissions: { id: number; name: string }[];
};

type SettingsAccountRolesSetupFormProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    role: Role | null;
    onSaved: () => Promise<void>;
};

const roleSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    description: z.string().trim().max(500, "Description must be 500 characters or less"),
    permission_ids: z.array(z.number()),
});

type RoleFormValues = z.infer<typeof roleSchema>;

export function SettingsAccountRolesSetupForm({
    open,
    onOpenChange,
    role,
    onSaved,
}: SettingsAccountRolesSetupFormProps) {
    const [selectedPermissions, setSelectedPermissions] = React.useState<number[]>([]);
    const [permissionGroups, setPermissionGroups] = React.useState<PermissionGroup[]>([]);

    useEffect(() => {
        const fetchPermissions = async () => {
            const response = await getPermissionsListAction();

            setPermissionGroups(response?.data ?? []);
        };

        fetchPermissions();
    }, []);

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<RoleFormValues>({
        resolver: zodResolver(roleSchema),
        defaultValues: {
            name: "",
            description: "",
            permission_ids: [],
        },
    });

    useEffect(() => {
        const permissionIds = role?.permissions.map((permission) => permission.id) ?? [];
        reset({
            name: role?.name ?? "",
            description: role?.description ?? "",
            permission_ids: permissionIds,
        });
        setSelectedPermissions(permissionIds);
    }, [role, open, reset]);

    const handlePermissionChange = (permissionId: number, checked: boolean) => {
        const nextPermissions = checked
            ? [...new Set([...selectedPermissions, permissionId])]
            : selectedPermissions.filter((id) => id !== permissionId);

        setSelectedPermissions(nextPermissions);
        setValue("permission_ids", nextPermissions, { shouldValidate: true });
    };

    const onSubmit = async (data: RoleFormValues) => {
        const toastId = toast.loading("Saving role...");

        try {
            const response = await saveUpdateRoleAction({
                ...data,
                ...(role ? { role_id: role.id } : {}),
            });

            if (!response?.success) {
                throw new Error(response?.message || "Unable to save role.");
            }

            reset();
            setSelectedPermissions([]);
            toast.success(response?.message, { id: toastId });
            onOpenChange(false);
            await onSaved();
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Something went wrong.", {
                id: toastId,
            });
        }
    };

    return (

        <Dialog open={open} onOpenChange={onOpenChange}>

            <DialogContent className={'min-w-xl'}>
                <DialogHeader >
                    <DialogTitle>{role ? "Edit Role" : "Create Role"}</DialogTitle>

                    <DialogDescription>
                        {role
                            ? "Update this role and its permissions"
                            : "Create a new role with custom permissions"}
                    </DialogDescription>
                </DialogHeader>
                <form
                    id="role-setup-form"
                    className={'-mx-4 max-h-[70vh] overflow-y-auto px-4'}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="space-y-6 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">
                                Role Name
                            </Label>

                            <Input
                                id="name"
                                {...register("name")}
                                placeholder="e.g. Content Editor"
                            />
                            {errors.name && (
                                <span className="text-sm text-destructive">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">
                                Description
                            </Label>

                            <Textarea
                                id="description"
                                {...register("description")}
                                placeholder="Describe what this role is responsible for..."
                                rows={3}
                            />
                            {errors.description && (
                                <span className="text-sm text-destructive">
                                    {errors.description.message}
                                </span>
                            )}
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
                                                            {selectedCount}/{group.permissions.length}
                                                        </span>
                                                    </span>

                                                    <ChevronDown className="size-4 transition-transform" />
                                                </Button>
                                            </CollapsibleTrigger>

                                            <CollapsibleContent>
                                                <div className="border-t px-4 py-3">
                                                    <div className="grid gap-3">
                                                        {group.permissions.map(
                                                            (permission) => (
                                                                <div key={permission.id} className="flex items-center gap-3" >
                                                                    <Checkbox
                                                                        id={`permission-${permission.id}`}
                                                                        checked={selectedPermissions.includes(
                                                                            permission.id
                                                                        )}
                                                                        onCheckedChange={(checked) =>
                                                                            handlePermissionChange( permission.id, checked === true )
                                                                        }
                                                                    />

                                                                    <Label
                                                                        htmlFor={`permission-${permission.id}`}
                                                                        className="cursor-pointer font-normal"
                                                                    >
                                                                        {permission.action}
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
                            {errors.permission_ids && (
                                <span className="text-sm text-destructive">
                                    {errors.permission_ids.message}
                                </span>
                            )}
                        </div>
                    </div>

                </form>
                <DialogFooter >
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button type="submit" form="role-setup-form" disabled={isSubmitting}>
                        <Save />
                        {isSubmitting ? "Saving..." : role ? "Save Changes" : "Create Role"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}