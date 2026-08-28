"use client"
import {
    Separator, TabsContent,
    Card, CardContent, CardDescription, CardHeader, CardTitle, Button, Input, Label,
} from "@/components/ui";
import {KeyRound, Eye, EyeOff} from "lucide-react";
import React from "react";

export function SettingsAccountAdministratorsSetup ({ activeTab } : { activeTab: string}) {
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const [showCurrent, setShowCurrent] = React.useState(false);
    const [showNew, setShowNew] = React.useState(false);
    const [showConfirm, setShowConfirm] = React.useState(false);

    const handleUpdatePassword = () => {
        // handle password update
    };

    return (
        <>
            <TabsContent value={activeTab}>
                <Card>
                    <CardHeader className={'space-y-1.5'}>
                        <CardTitle className={'text-lg font-medium!'}>
                            <p className={'flex items-center gap-2'}>
                                <KeyRound size={18} />
                                Change password
                            </p>
                        </CardTitle>
                        <CardDescription>
                            Use at least 12 characters. Two-factor authentication remains required.
                        </CardDescription>
                    </CardHeader>
                    <Separator />
                    <CardContent className="mt-2 flex flex-col gap-5 text-sm text-muted-foreground">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="current-password" className={'font-medium text-foreground'}>
                                Current password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="current-password"
                                    type={showCurrent ? "text" : "password"}
                                    placeholder={'Enter current password'}
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    className={'pr-10'}
                                />
                                <Button
                                    variant={'ghost'}
                                    onClick={() => setShowCurrent((prev) => !prev)}
                                    aria-label={showCurrent ? "Hide password" : "Show password"}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="new-password" className={'font-medium text-foreground'}>
                                New password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="new-password"
                                    type={showNew ? "text" : "password"}
                                    placeholder={'Enter new password'}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className={'pr-10'}
                                />

                                <Button
                                    variant={'ghost'}
                                    onClick={() => setShowNew((prev) => !prev)}
                                    aria-label={showNew ? "Hide password" : "Show password"}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="confirm-password" className={'font-medium text-foreground'}>
                                Confirm new password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="confirm-password"
                                    type={showConfirm ? "text" : "password"}
                                    placeholder={'Confirm new password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={'pr-10'}
                                />

                                <Button
                                    variant={'ghost'}
                                    onClick={() => setShowConfirm((prev) => !prev)}
                                    aria-label={showConfirm ? "Hide password" : "Show password"}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                                </Button>
                            </div>
                        </div>

                        <div>
                            <Button onClick={handleUpdatePassword} variant={'secondary'}>
                                Update password
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </>
    )
};