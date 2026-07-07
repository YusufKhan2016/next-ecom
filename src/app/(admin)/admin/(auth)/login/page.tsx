import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <>
      <section>
        <form className="h-screen flex items-center">
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
                    <Input id="email" placeholder="admin@nextecom.com" />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" placeholder="password" />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <Button>
                    Login
                  </Button>
                </Field>
              </FieldGroup>

            </CardContent>
          </Card>
        </form>
      </section>
    </>
  )   
}