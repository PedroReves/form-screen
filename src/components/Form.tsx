import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'

export default function Form() {
  /* function handleFormSubmit(data: unknown): void {
    console.log(data)
  } */

  return (
    <Card className="w-1/3">
      <CardHeader>
        <CardTitle className="font-semibold text-xl pt-2 text-center">
          Create an Account
        </CardTitle>
        <CardDescription className="font-normal text-sm text-center pt-2 text-descriptionColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat,
          harum consequuntur non exercitationem placeat quod quasi ut pariatur
          earum
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-y-4">
            <div>
              <Label htmlFor="name">Name: </Label>
              <Input type="text" placeholder="Enter your name..." />
            </div>
            <div>
              <Label htmlFor="email">Email: </Label>
              <Input type="email" placeholder="Enter your email..." />
            </div>
            <div>
              <Label htmlFor="password">Name: </Label>
              <Input type="password" placeholder="Enter your password..." />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password: </Label>
              <Input type="password" placeholder="Confirm your password..." />
            </div>
            <Button type="submit" className="mt-4">
              Sign In
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
