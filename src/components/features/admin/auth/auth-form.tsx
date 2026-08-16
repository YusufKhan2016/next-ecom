"use client";

import {useActionState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
    Button,Card,CardContent,CardDescription,CardHeader,CardTitle,
    Field,FieldGroup,FieldLabel,Input,
} from "@/components/ui";

import { loginAction } from "@/actions";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {useAuthStore} from "@/store";

const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email"),

    password: z
        .string()
        .min(1, "Password is required")
        .min(3, "Password must be at least 3 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const login = useAuthStore((store) => store.login)
    const router = useRouter()
    const [state, submitAction, isPending] = useActionState(loginAction, {
        email: '',
        password:''
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {

            const toastId = toast.loading("Logging in...");

            await loginAction(data).then((response) => {
                login({
                    token: response?.data?.token,
                    user: response?.data?.user,
                    role: response?.data?.role,
                    permissions: response?.data?.permissions,
                    menus: response?.data?.menus,
                })
                setValue('email', '')
                setValue('password', '')
                toast.success(response?.message, { id: toastId });
                router.push('/admin/dashboard')

            }).catch((error) => {
                toast.success(error, { id: toastId });
            })
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-sm"
        >
            <Card className="shadow-2xl">
                <CardHeader className="text-center bg-accent">
                    <CardTitle className="italic font-bold">Next Ecom</CardTitle>
                    <h1 className="font-medium">Admin Login</h1>
                    <CardDescription>
                        Please use your admin credential to login
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-4">

                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                {...register("email")}
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="admin@nextecom.com"
                            />
                            {errors.email && (
                                <span className="text-sm text-destructive">
                                    {errors.email.message}
                                </span>
                            )}
                        </Field>
                    </FieldGroup>

                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Input
                                {...register("password")}
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Password"
                            />
                            {errors.password && (
                                <span className="text-sm text-destructive">
                                    {errors.password.message}
                                </span>
                            )}
                        </Field>
                    </FieldGroup>

                    <FieldGroup>
                        <Field>
                            <Button type="submit" className="w-full" disabled={isPending}>
                                {isPending ? "Logging in..." : "Login"}
                            </Button>
                        </Field>
                    </FieldGroup>
                </CardContent>
            </Card>
        </form>
    );
}