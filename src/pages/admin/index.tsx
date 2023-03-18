import Container from '@/components/Container'
import LoginForm from '@/common/forms/LoginForm'
import Wrapper from '@/components/Wrapper'
import ErrorAlert from '@/components/alerts/ErrorAlert'

const LoginPage = () => {
  return (
    <main className="h-screen bg-gray-300 flexCenter">
      <Container className="h-screen flexCenter">
        <Wrapper className="p-6 space-y-4 bg-white shadow-xl rounded-2xl w-96">
          <header>
            <h1 className="text-xl font-bold">Masuk</h1>
            <p className="text-xs text-gray-500">Portfolio admin dashboard</p>
          </header>

          <main className="space-y-4">
            <LoginForm />
          </main>
        </Wrapper>
      </Container>
    </main>
  )
}

export default LoginPage
