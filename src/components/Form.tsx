import { useForm } from 'react-hook-form'
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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Names needs to be more than 3 characters' })
      .regex(/[a-zA-Z\u00C0-\u00FF ]+/i, {
        message: 'Your name cant have numbers',
      }),
    email: z
      .string()
      .email({ message: 'This Input is not an valid email' })
      .regex(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      ),
    password: z
      .string()
      .min(8, { message: 'Your password must have 8 characters ' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Your password must have 8 characters ' }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'The password does not match',
    path: ['confirmPassword'],
  })

type createUserFormData = z.infer<typeof createUserSchema>

function handleFormSubmit(data: createUserFormData): void {
  console.table(data)
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserSchema),
  })
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
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col gap-y-4">
            <div>
              <Label htmlFor="name">Name: </Label>
              <Input
                type="text"
                placeholder="Enter your name..."
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email: </Label>
              <Input
                type="email"
                placeholder="Enter your email..."
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>
            <div>
              <Label htmlFor="password">Password: </Label>
              <Input
                type="password"
                placeholder="Enter your password..."
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )}
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password: </Label>
              <Input
                type="password"
                placeholder="Confirm your password..."
                {...register('confirmPassword', { required: true })}
              />
              {errors.confirmPassword && (
                <span className="error-message">
                  {errors.confirmPassword.message}
                </span>
              )}
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
