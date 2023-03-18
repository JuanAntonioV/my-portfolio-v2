import Button from '@/components/buttons/Button'
import Form from '@/components/forms/Form'
import FormGroup from '@/components/forms/FormGroup'
import FormInput from '@/components/forms/FormInput'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <Form>
      <FormGroup>
        <FormInput id="email" label="Email" name="email" type="email" />

        <FormInput
          id="password"
          label="Password"
          name="password"
          type="password"
        />
      </FormGroup>

      <FormGroup classname="space-y-6">
        <div className="flexEnd">
          <Link
            href={'/admin/forgot-password'}
            className="text-sm font-medium text-blue-500"
          >
            Lupa password?
          </Link>
        </div>

        <Button>Masuk</Button>
      </FormGroup>
    </Form>
  )
}

export default LoginForm
