import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

function RegisterPage() {
    return (
        <section>
            <div className='container px-4 mx-auto'>
                <Card className='max-w-sm mt-12 mx-auto'>
                    <CardHeader className='text-center space-y-1'>
                    
                        <CardTitle className='italic'>
                            Registration Form
                        </CardTitle>
                        
                        <CardDescription>
                            Kindly register with your required information
                        </CardDescription>
                    
                    </CardHeader>

                    <Separator orientation='horizontal' />
                    
                    <CardContent className='mt-2'>
                        <FieldGroup>

                            <Field>

                                <FieldLabel htmlFor="email">
                                Email
                                </FieldLabel>

                                <Input 
                                id="email" 
                                type="email" 
                                placeholder="demo@email.com"
                                />
                                
                            </Field>

                            <Field>

                                <FieldLabel htmlFor="password">
                                Set Password
                                </FieldLabel>

                                <Input 
                                id="password" 
                                type="password" 
                                placeholder="Set your Password"
                                />
                                
                            </Field>

                            <Field>

                                <FieldLabel htmlFor="password">
                                Confirm your password
                                </FieldLabel>

                                <Input 
                                id="password" 
                                type="password" 
                                placeholder="Confirm your password"
                                />
                                
                            </Field>

                            <Field>
                                <Button type="submit" form="form-rhf-demo">
                                    Register
                                </Button>
                            </Field>

                        </FieldGroup>
                    </CardContent>

                    <CardFooter className='space-x-1'>
                        <CardDescription>
                            Already have an account?
                        </CardDescription>

                        <Link
                            href={'/login'}
                            className='text-sm font-bold italic'
                        >
                            Login 
                        </Link>
                    </CardFooter>
                </Card>
            </div>
      </section>
    )
}

export default RegisterPage