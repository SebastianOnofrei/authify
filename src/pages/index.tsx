import { NextPageContext } from "next"
 
import { useSession, signIn, signOut, getSession } from "next-auth/react"
export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return (
    <>
      Signed in as {session.user.email} <br/>
      <img src={session.user.image} alt="" />
      <h1>Username : {session.user.name}</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </>
    )
  }
  return (
  <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
  )
}

export async function getServerSideProps(ctx:NextPageContext){
  const session= await getSession(ctx);

  return{
    props:{
      session
    }
  }
}
