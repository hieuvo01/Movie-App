import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function UserSettings() {
  return (
    <div className="">
      <div className="px-4 py-12 sm:px-6 lg:px-8 mt-10">
      <div className="mx-auto flex justify-around space-y-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-lg">Profile</CardTitle>
          <CardDescription>Update your profile information.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Your address" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="gender">Gender</Label>
            <Input id="gender" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Enter your bio" />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-md">
        <CardContent className="grid gap-4 pt-6">
          <div className="grid gap-2">
            <Label>Avatar</Label>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="grid gap-2.5">
                <Button> Choose new avatar</Button>
                <input type="file" id="myfile" name="myfile" />
                <Button size="sm" variant="outline">
                  Remove avatar
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save</Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-lg">Change Password</CardTitle>
          <CardDescription>Update your password.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" placeholder="Enter your current password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" placeholder="Enter your new password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save</Button>
        </CardFooter>
      </Card>
      </div>
      </div>
    </div>
  )
}

