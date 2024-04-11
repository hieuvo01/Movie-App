/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gF3FjXU6ETo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 mt-24">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" required type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label className="text-sm leading-none" htmlFor="terms">
              I agree to the
              <Link className="underline" href="#">
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button className="w-full">Sign Up</Button>
        </div>
      </div>
    </div>
  )
}