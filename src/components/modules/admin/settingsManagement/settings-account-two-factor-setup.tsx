"use client"
import {
    Separator, TabsContent, CollapsibleTrigger,
    Card, CardContent, CardDescription, CardHeader, CardTitle, Button, TooltipTrigger, Tooltip, TooltipContent,
    CollapsibleContent, Collapsible, Input,
} from "@/components/ui";
import {AlertCircle, Layers2, Smartphone, Mail, ShieldCheck, User, Shield} from "lucide-react";
import React from "react";

type TwoFactorMethod = "authenticator" | "email";

export function SettingsAccountTwoFactorSetup({ activeTab } : { activeTab: string})
{
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedMethod, setSelectedMethod] = React.useState<TwoFactorMethod | null>(null);
    const [password, setPassword] = React.useState("");

    const handleSelectMethod = (method: TwoFactorMethod) => {
        setSelectedMethod(method);
    };

    const handleBack = () => {
        setSelectedMethod(null);
        setPassword("");
    };

    const handleCancel = () => {
        setIsOpen(false);
        setSelectedMethod(null);
        setPassword("");
    };

    return (
        <>
            <TabsContent value={activeTab}>
                <Card>
                    <CardHeader className={'space-y-1.5'}>
                        <CardTitle className={'text-lg font-medium!'}>
                            <p className={'flex items-center gap-2'}>
                                <Layers2 size={15} />
                                Two Factor
                            </p>
                        </CardTitle>
                        <CardDescription>
                            Add verification layers for more security.
                        </CardDescription>
                    </CardHeader>
                    <Separator />
                    <CardContent className="text-sm mt-2 text-muted-foreground">
                        <Collapsible
                            open={isOpen}
                            onOpenChange={setIsOpen}
                            className="flex flex-col gap-2"
                        >
                            <div className="flex items-center justify-between gap-2 rounded-lg border border-destructive/50 bg-destructive/5 p-4">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="mt-0.5 shrink-0 text-destructive" size={18} />
                                    <div>
                                        <p className="font-medium text-foreground">Setup required</p>
                                        <p className="text-sm">Verify a method before this account is considered ready.</p>
                                    </div>
                                </div>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <CollapsibleTrigger asChild>
                                            <Button>
                                                <ShieldCheck size={18} />
                                            </Button>
                                        </CollapsibleTrigger>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Set up two-factor</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>

                            <CollapsibleContent>
                                <Card>
                                    <CardContent className={'mt-3 flex flex-col space-y-1.5'}>
                                        <CardTitle className={'text-lg font-medium!'}>
                                            <p className={'flex items-center gap-2'}>
                                                <Shield size={15}/>
                                                Enable two-factor authentication.
                                            </p>
                                        </CardTitle>
                                        <CardDescription>
                                            Choose and verify the method used when you sign in.
                                        </CardDescription>

                                        {!selectedMethod && (
                                            <div className="flex flex-col gap-1.5">
                                                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                    <Button
                                                        variant={'outline'}
                                                        onClick={() => handleSelectMethod("authenticator")}
                                                        className={'min-h-[70px] flex flex-col! justify-center! gap-0 items-start'}
                                                    >
                                                        <h3 className="flex items-center text-lg gap-2">
                                                            <Smartphone />
                                                            <span className="font-medium text-foreground">Authenticator app</span>
                                                        </h3>
                                                        <p className={'text-sm font-light! text-muted-foreground'}>One time passoword from TOTP App.</p>
                                                    </Button>

                                                    <Button
                                                        variant={'outline'}
                                                        onClick={() => handleSelectMethod("email")}
                                                        className={'min-h-[70px] flex flex-col! justify-center! gap-0 items-start'}
                                                    >
                                                        <h3 className="flex items-center text-lg gap-2">
                                                            <Mail />
                                                            <span className="font-medium text-foreground">Email code</span>
                                                        </h3>
                                                        <p className="text-sm font-light! text-muted-foreground">Sent to demo@scalius.com</p>
                                                    </Button>
                                                </div>

                                                <div className="mt-3 flex items-center justify-end gap-2">
                                                    <Button onClick={handleCancel} variant={'outline'}>
                                                        Cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        )}

                                        {selectedMethod && (
                                            <div className="flex flex-col gap-1.5">

                                                <div className="mt-3 flex flex-col gap-2">
                                                    <label className="text-sm font-medium text-foreground">
                                                        Confirm your password
                                                    </label>
                                                    <Input
                                                        type={'password'}
                                                        placeholder={'Enter your password'}
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>

                                                <div className="mt-3 flex items-center justify-end gap-2">
                                                    <Button onClick={handleBack} variant={'outline'}>
                                                        Back
                                                    </Button>

                                                    <Button variant={'secondary'}>
                                                        Continue
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </CollapsibleContent>
                        </Collapsible>
                    </CardContent>
                </Card>
            </TabsContent>
        </>
    )
}