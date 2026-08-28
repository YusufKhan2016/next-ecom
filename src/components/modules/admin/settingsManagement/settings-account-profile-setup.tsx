"use client"
import {
    Avatar, AvatarFallback, Separator, TabsContent, AvatarImage, CollapsibleTrigger,
    Card, CardContent, CardDescription, CardHeader, CardTitle, Button, TooltipTrigger, Tooltip, TooltipContent,
    CollapsibleContent, Collapsible, Input, AttachmentGroup, Attachment, AttachmentMedia, AttachmentContent,
    AttachmentTitle, AttachmentDescription, AttachmentActions, AttachmentAction, AttachmentTrigger,
} from "@/components/ui";
import {Check, SquarePen, User, X, XIcon} from "lucide-react";
import React from "react";

const image = {
    name: "workspace.png",  
    meta: "PNG · 820 KB",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80",
    alt: "Workspace",
}

export function SettingsAccountProfileSetup({ activeTab } : { activeTab: string})
{
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <TabsContent value={activeTab}>
                <Card>
                    <CardHeader className={'space-y-1.5'}>
                        <CardTitle className={'text-lg font-medium!'}>
                            <p className={'flex items-center gap-2'}>
                                <User size={18} />
                                Profile
                            </p>
                        </CardTitle>
                        <CardDescription>
                            Edit your basic infos from here.
                        </CardDescription>
                    </CardHeader>
                    <Separator />
                    <CardContent className="text-sm mt-2 text-muted-foreground">
                        <Collapsible
                            open={isOpen}
                            onOpenChange={setIsOpen}
                            className="flex flex-col gap-2"
                        >
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <Avatar size={'lg'}>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h2 className={'text-foreground font-bold text-lg'}>Rafsun</h2>
                                    <p>hasanrafsun5@gmail.com</p>
                                </div>
                            </div>


                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <CollapsibleTrigger asChild>
                                        <Button>
                                            <SquarePen />
                                        </Button>
                                    </CollapsibleTrigger>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Edit Profile</p>
                                </TooltipContent>
                            </Tooltip>

                        </div>

                        <CollapsibleContent>
                            <Card>
                                <CardContent className={'mt-3'}>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type={'text'}
                                            placeholder={'Enter Name'}
                                        />

                                        <Button onClick={()=>setIsOpen(false)} variant={'destructive'}>
                                            <X />
                                            Cancel
                                        </Button>

                                        <Button variant={'secondary'}>
                                            <Check />
                                            Save
                                        </Button>
                                    </div>
                                    <AttachmentGroup className="w-full">

                                        <Attachment key={image.name} orientation="vertical">
                                            <AttachmentMedia variant="image">
                                                <img src={image.src} alt={image.alt} />
                                            </AttachmentMedia>
                                            <AttachmentContent>
                                                <AttachmentTitle>{image.name}</AttachmentTitle>
                                                <AttachmentDescription>{image.meta}</AttachmentDescription>
                                            </AttachmentContent>
                                            <AttachmentActions>
                                                <AttachmentAction className={'hover:bg-destructive! bg-background!'} aria-label={`Remove ${image.name}`}>
                                                    <XIcon />
                                                </AttachmentAction>
                                            </AttachmentActions>
                                            <AttachmentTrigger
                                                asChild

                                            >
                                                    <a
                                                        href={image.src}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label={`Open ${image.name}`}
                                                    />
                                            </AttachmentTrigger>
                                        </Attachment>

                                    </AttachmentGroup>
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