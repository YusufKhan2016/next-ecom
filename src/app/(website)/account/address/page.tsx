import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Address {
  id: string
  name: string
  location: string
}

const addresses: Address[] = [
  { id: "1", name: "Hasan Yusuf Khan", location: "Ashulia" },
  { id: "2", name: "Hasan Yusuf Khan", location: "Bangabashi school" },
]

export default function AddressPage() {
  return (
    <>
      <div>
        <div className="flex items-center justify-end mb-6">
          <Button>
            Add New Address
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <Card key={address.id} className="shadow-none">
              <CardContent className="pt-2">
                <p className="font-semibold">{address.name}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {address.location}
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <Button>
                    Change
                  </Button>
                  
                  <Button>
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}