import { PlaidLinkProps } from "@/types"
import { Button } from "./ui/button"
import { useCallback, useEffect, useState } from "react"
import { createLinkToken, exchangePublicToken } from "@/lib/actions/user.actions"
import { useRouter } from "next/navigation"
import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess } from "react-plaid-link"


const PlaidLink = ({user, variant}:PlaidLinkProps) => {
  const [token, setToken] = useState('')
  const router = useRouter();

  useEffect(() => {
   const getLinkToken= async()=>{
     const data = await createLinkToken(user)

     setToken(data?.linkToken);
   }
    return () => {
      getLinkToken();
    }
  }, [])
  

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string)=>{
    await exchangePublicToken({
      publicToken: public_token,
      user
    })

    router.push('/')
  }, [user])

  const config:PlaidLinkOptions ={
    token,
    onSuccess
  }

  const {open, ready} = usePlaidLink(config);

  return (
    <>
    {
      variant === "primary"? (
        <Button onClick={()=>open} disabled={!ready} className="plaidlink-primary">
          Connect Bank
        </Button>
      ): variant === 'ghost'? (
        <Button>
          Connect Bank
        </Button>
      ):(
          <Button>
          Connect Bank
        </Button>
      )
    }
    </>
  )
}
export default PlaidLink