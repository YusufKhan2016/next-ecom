import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

function LoginPage() {
  return (
    <>
      <section>
        <div className='container px-4 mx-auto'>
          <Card className='max-w-sm mt-12 mx-auto'>
            <CardHeader className='text-center space-y-1'>
              
              <CardTitle className='italic'>
                Welcome Back
              </CardTitle>
              
              <CardDescription>
                Please Login to proceed
              </CardDescription>
            
            </CardHeader>

            <Separator orientation='horizontal' />
            
            <CardContent className='space-y-2.5 mt-2'>
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
                  Password
                </FieldLabel>

                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Password"
                />
                
              </Field>
            </CardContent>

            <CardFooter className='space-x-1'>
              <CardDescription>
                Don&apos;t have any account?  
              </CardDescription>
              <Link
                href={'/register'}
                className='text-sm font-bold italic'
              >
                Register now
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  )
}

export default LoginPage