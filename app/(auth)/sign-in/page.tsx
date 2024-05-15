import AuthForm from "@/components/AuthForm"
import { getLoggedInUser } from "@/lib/actions/user.actions"

const SignIn =async () => {

    const user = await getLoggedInUser()

    console.log('USER RETURNED', user) 

  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in"/>
    </section>
  )
}
export default SignIn