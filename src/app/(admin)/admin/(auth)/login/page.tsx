"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from '@/store';
import {useAuth, useLogin} from '@/hooks/admin';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Field, FieldGroup, FieldLabel, Input } from "@/components/ui"
import { ThemeProvider } from '@/providers/theme-provider';
import { ThemeSwitcher } from '@/components/theme';

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  password: z.string().min(1, "Password is required").min(3, "Password must be at least 3 characters"),
})

type loginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  
  const loginMutation = useLogin();
  const router = useRouter();

  const login = useAuthStore((state) => state.login);

  const {
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset, 
    watch
  } = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
  });

  // const values = watch();
  
  function submit(data: loginForm) {
    setLoading(true);
    const toastId = toast.loading("Logging in...");

    loginMutation.mutate(data, {
      onSuccess: function (response) {
        const loggedData = response.data?.data;
        
        login({
          token: loggedData?.token,
          user: loggedData?.user,
          role: loggedData?.role,
          permissions: loggedData?.permissions,
          menus: loggedData?.menus
        });

        toast.success("Successfully logged in.", { id: toastId });
        reset();
        setLoading(false);
        router.push('/admin/dashboard')
      },

      onError: function (error:any) {
        toast.error(error?.response?.data?.message ?? "Login failed.", {
          id: toastId
        });

        setLoading(false);
      }
    })
  }

  return (
    <>
      <section>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='absolute right-0 p-4'>
            <ThemeSwitcher />
          </div>
          
          <form onSubmit={handleSubmit(submit)} className="h-screen flex items-center">
            <Card className="container mx-auto max-w-sm shadow-2xl">
              <CardHeader className="text-center bg-accent">
                  <CardTitle className="italic font-bold!">Next Ecom</CardTitle>
                  <h1 className="font-medium">Admin Login</h1>
                  <CardDescription>Please use your admin credential to login</CardDescription>
              </CardHeader>

              <CardContent className="space-y-2 pt-4">

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input 
                      {...register("email")}
                      autoComplete="email"
                      type="email"
                      id="email" 
                      placeholder="admin@nextecom.com"
                    />

                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input 
                      {...register("password")}
                      autoComplete="current-password"
                      type="password"
                      id="password" 
                      placeholder="password" 
                    />

                    {errors.password && (
                      <p className="text-sm text-destructive">
                        {errors.password.message}
                      </p>
                    )}
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <Button 
                      type="submit" 
                      disabled={loading}
                    >
                      Login
                    </Button>
                  </Field>
                </FieldGroup>

              </CardContent>
            </Card>
          </form>
        </ThemeProvider>
      </section>
    </>
  )   
}